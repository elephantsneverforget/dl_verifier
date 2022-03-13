import joi from "joi";
import { Logger } from "../logger.js";
import { eventId } from "../schemas.js";
import { getEventNameSchema as getSchemaForEventName } from "../schemas.js";
import {
    ecommerce,
    stringSchema,
    ecommerceWithoutWrapper,
    cartTotal,
    userPropertiesLoggedIn,
    userPropertiesNotLoggedIn,
    buildListSchema,
} from "../schemas.js";
import { dl_view_item_schema_example } from "../exampleSchemaObjects/dl_view_item.js";
import { dl_add_to_cart_schema_example } from "../exampleSchemaObjects/dl_add_to_cart.js";
import { dl_begin_checkout_schema_example } from "../exampleSchemaObjects/dl_begin_checkout.js";
import { dl_remove_from_cart_schema_example } from "../exampleSchemaObjects/dl_remove_from_cart.js";
import { dl_search_results_schema_example } from "../exampleSchemaObjects/dl_search_results.js";
import { dl_view_cart_schema_example } from "../exampleSchemaObjects/dl_view_cart.js";
import { dl_view_item_list_schema_example } from "../exampleSchemaObjects/dl_view_item_list.js";
import { dl_select_item_schema_example } from "../exampleSchemaObjects/dl_select_item.js";
import { dl_user_data_schema_example } from "../exampleSchemaObjects/dl_user_data.js";
import { dl_login_schema_example } from "../exampleSchemaObjects/dl_login.js";
import { dl_sign_up_schema_example } from "../exampleSchemaObjects/dl_sign_up.js";
import { dl_route_change_schema_example } from "../exampleSchemaObjects/dl_route_change";

const eventsRequiringUserPropertiesSchema = [
    "dl_user_data",
    "dl_login",
    "dl_sign_up",
];

class DLEvent {
    constructor(dataLayerObject, schemaExample) {
        this._schemaExample = schemaExample;
        this._dataLayerObject = dataLayerObject;
        this._errors = [];
        this._verificationSummary;
        this._isValid;
        this._userIsLoggedIn =
            dataLayerObject.user_properties?.visitor_type === "logged_in";
        this._dlEventName = schemaExample.event;
    }

    verify(additionalSchemas) {
        if (this._verificationhasBeenRun)
            throw new Error(
                "Can't call verify more than once on the same object."
            );

        // Build the schema for the event
        const dlEventSchema = joi.object({
            event: getSchemaForEventName(this._dlEventName),
            // user_properties only required on dl_user_data, dl_login, dl_signup
            ...(this.eventRequiresUserProperties() && {
                user_properties: this.getUserPropertiesSchema(),
            }),
            // No event_id for dl_route_change
            ...(this.getEventName() !== "dl_route_change" && {
                event_id: eventId,
            }),
            ...additionalSchemas,
        });

        const validation = dlEventSchema.validate(this._dataLayerObject, {
            abortEarly: false,
            allowUnknown: true,
        });

        if (validation.error) {
            this._isValid = false;
            this._errors = validation.error.details;
            this._verificationSummary = `${
                this._dlEventName
            } event_id ${this.formatEventID(
                this._dataLayerObject.event_id
            )} is invalid`;
        } else {
            this._isValid = true;
            this._verificationSummary = `${
                this._dlEventName
            } event_id: ${this.formatEventID(
                this._dataLayerObject.event_id
            )} is valid.`;
        }
        this._verificationhasBeenRun = true;
        return validation;
    }

    getErrors() {
        return this._errors;
    }

    eventRequiresUserProperties() {
        return (
            eventsRequiringUserPropertiesSchema.includes(this._dlEventName) ===
            true
        );
    }

    getUserPropertiesSchema() {
        return this.userIsLoggedIn()
            ? userPropertiesLoggedIn
            : userPropertiesNotLoggedIn;
    }

    getEventName() {
        return this._dlEventName;
    }

    isValid() {
        return this._isValid;
    }

    getVerificationSummary() {
        return this._verificationSummary;
    }

    logVerificationOutcome(additionalText) {
        Logger.logToConsole(
            this._errors,
            this._verificationSummary,
            additionalText,
            this._dataLayerObject,
            this._schemaExample
        );
    }

    userIsLoggedIn() {
        return this._userIsLoggedIn;
    }

    formatEventID(eventID) {
        if (eventID === undefined) return "N/A";
        const length = eventID.length;
        return `${eventID.slice(0, 3)}..${eventID.slice(
            length - 4,
            length - 1
        )}`;
    }
}

export class DLEventUserData extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_user_data_schema_example);
    }
}

export class DLEventLogin extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_login_schema_example);
    }
}

export class DLEventSignUp extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_sign_up_schema_example);
    }
}

export class DLEventViewItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_view_item_schema_example);
    }

    verify() {
        return super.verify(
            ecommerceFactory("detail", {
                list: buildListSchema("action field"),
                action: joi.string().allow("detail").required().messages({
                    "any.required": `"action" is a required field on the actionField object and should contain the string "detail"`,
                }),
            })
        );
    }
}

export class DLEventAddToCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_add_to_cart_schema_example);
    }

    verify() {
        super.verify(
            ecommerceFactory("add", {
                list: buildListSchema("action field"),
                action: joi.string().allow("add").required().messages({
                    "any.required": `"action" is a required field on the actionField object and should contain the string "add"`,
                }),
            })
        );
    }
}

export class DLEventBeginCheckout extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_begin_checkout_schema_example);
    }

    verify() {
        super.verify(
            ecommerceFactory("checkout", {
                step: joi.string().allow("1").required().messages({
                    "any.required": `"step" is a required field on the actionField object and should contain the string "1".`,
                }),
                action: joi.string().allow("checkout").required().messages({
                    "any.required": `"action" is a required field on the actionField object and should contain the string "checkout"`,
                }),
            })
        );
    }
}

export class DLEventRemoveFromCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_remove_from_cart_schema_example);
    }

    verify() {
        super.verify(
            ecommerceFactory("remove", {
                list: buildListSchema("action field"),
            })
        );
    }
}

export class DLEventSelectItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_select_item_schema_example);
    }

    verify() {
        super.verify(
            ecommerceFactory("click", {
                list: buildListSchema("click field"),
                action: stringSchema(
                    `"action" is a required field on the actionField object and should contain the string "click"`,
                    false
                ),
            })
        );
    }
}

export class DLEventSearchResults extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_search_results_schema_example);
    }

    verify() {
        super.verify({
            ecommerce: ecommerceWithoutWrapper({
                actionField: {
                    list: buildListSchema("action field")
                },
            }),
        });
    }
}

export class DLEventViewCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_view_cart_schema_example);
    }

    verify() {
        super.verify({
            cart_total: cartTotal,
            ecommerce: ecommerceWithoutWrapper({
                actionField: {
                    list: buildListSchema("action field")
                },
            }),
        });
    }
}

export class DLEventViewItemList extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_view_item_list_schema_example);
    }

    verify() {
        super.verify({
            ecommerce: ecommerceWithoutWrapper(),
        });
    }
}

export class DLEventRouteChange extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject, dl_route_change_schema_example);
    }
}

function ecommerceFactory(subField, fields) {
    return {
        // action field builder + pass name of field that's not currency.
        ecommerce: ecommerce({
            ecommerceSubFieldWrapper: subField,
            actionField: {
                ...fields,
            },
        }),
    };
}
