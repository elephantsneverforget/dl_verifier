import joi from "joi";
import { Logger } from "../logger.js";
import {
    eventId,
    cartTotal,
    userPropertiesLoggedIn,
    userPropertiesNotLoggedIn,
    buildListSchema,
    currencyCode,
    buildActionSchema,
    products,
    getEventNameSchema,
    buildStepSchema,
    impressions,
    ecommerce,
    getMarketingSchema,
    device,
    page,
    event_time,
    ecommerceDLUserDataItems,
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

export class DLEvent {
    constructor(dataLayerObject, schemaExample, dataLayer, rawCookieString) {
        this._rawCookieString = rawCookieString;
        this._cookies = this._getCookieValues(rawCookieString);
        this._dlEventName = schemaExample.event;
        if (dataLayer) this.setShouldBePrecededByDLUserData(dataLayer);
        this._schemaExample = schemaExample;
        this._dataLayerObject = dataLayerObject;
        this._errors = [];
        this._verificationSummary;
        this._isValid;
        this._userIsLoggedIn =
            dataLayerObject.user_properties?.visitor_type === "logged_in";
        this.verify();
    }

    // Verify the shape of the event.
    // If the event is not valid, return the error message.
    // The the event is not preceded by dl_user_data at it is required to be it will still be valid.
    // However, missing isMissingUserData() will be set to true.
    verify(additionalSchemas) {
        if (this._verificationhasBeenRun)
            throw new Error(
                "Can't call verify more than once on the same object."
            );

        // Build the schema for the event
        const dlEventSchema = joi.object({
            event: getEventNameSchema(this._dlEventName),
            // Event requires event_time
            ...(this.eventRequiresEventTime() && {
                event_time: event_time,
            }),
            // Marketing not required on route change
            ...(this.eventRequiresMarketingProperties() && {
                marketing: getMarketingSchema(this._cookies),
            }),
            // No event_id for dl_route_change
            ...(this.eventRequiresEventId() && {
                event_id: eventId,
            }),
            ...additionalSchemas,
        });

        const validation = dlEventSchema.validate(this._dataLayerObject, {
            abortEarly: false,
            allowUnknown: true,
        });

        if (validation.error) {
            // console.log(validation.error);
            this._isValid = false;
            this._errors = validation.error.details;
            this._verificationSummary = `${
                this._dlEventName
            } event_id ${this._formatEventID(
                this._dataLayerObject.event_id
            )} is invalid`;
        } else {
            this._isValid = true;
            this._verificationSummary = `${
                this._dlEventName
            } event_id: ${this._formatEventID(
                this._dataLayerObject.event_id
            )} is valid.`;
        }
        this._verificationhasBeenRun = true;
        return validation;
    }

    getErrors() {
        return this._errors;
    }

    eventRequiresEventTime() {
        return this._dlEventName !== "dl_route_change";
    }

    eventRequiresEcommerceObject() {
        return this._dlEventName === "dl_user_data";
    }

    eventRequiresCartTotal() {
        return this._dlEventName === "dl_user_data";
    }

    eventRequiresPage() {
        return (
            this._dlEventName === "dl_user_data" ||
            this._dlEventName === "dl_login" ||
            this._dlEventName === "dl_sign_up"
        );
    }

    eventRequiresDevice() {
        return this._dlEventName === "dl_user_data";
    }

    eventRequiresUserProperties() {
        return (
            this.eventsRequiringUserPropertiesSchema().includes(
                this._dlEventName
            ) === true
        );
    }

    eventsRequiringUserPropertiesSchema() {
        return ["dl_user_data", "dl_login", "dl_sign_up"];
    }

    eventsNotRequiringUserDataToPrecedeThem() {
        return ["dl_user_data", "dl_login", "dl_sign_up", "dl_route_change"];
    }

    eventRequiresMarketingProperties() {
        return this._dlEventName !== "dl_route_change";
    }

    eventRequiresEventId() {
        return this.getEventName() !== "dl_route_change";
    }

    getUserPropertiesSchema() {
        return this.userIsLoggedIn()
            ? userPropertiesLoggedIn
            : userPropertiesNotLoggedIn;
    }

    _getCookie(name) {
        const value = `; ${this._rawCookieString}`;
        const parts = value.split(`; ${name}=`);
        return parts.length === 2 ? parts.pop().split(";").shift() : "";
    }

    // Take a list of cookie names and return a list of cookie key value pairs
    _getCookieValues() {
        const cookieValues = {};
        this._getRequiredCookieList(this._rawCookieString).forEach(
            (cookieName) => {
                this._getCookie(cookieName)
                    ? (cookieValues[cookieName] = this._getCookie(cookieName))
                    : null;
            }
        );
        return cookieValues;
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
            this._schemaExample,
            this.isMissingUserData()
        );
    }

    userIsLoggedIn() {
        return this._userIsLoggedIn;
    }

    isMissingUserData() {
        return this._missingUserData;
    }

    setMissingUserData(isMissing) {
        this._missingUserData = isMissing;
    }

    eventMustBePrecededByUserData() {
        return !this.eventsNotRequiringUserDataToPrecedeThem().includes(
            this._dlEventName
        );
    }

    eventWasPrecededByUserData(dataLayerSnapshot, eventName) {
        // First find the index of the earliest event by this name in the DL
        const indexOfEvent = dataLayerSnapshot.findIndex(
            (event) => eventName === event.event
        );
        if (indexOfEvent === -1)
            throw new Error(
                `Could not find event ${eventName} in the data layer`
            );
        const indexOfDlUserData = dataLayerSnapshot.findIndex(
            (event) => event.event === "dl_user_data"
        );
        if (indexOfDlUserData === -1) return false;
        return indexOfDlUserData < indexOfEvent;
    }

    setShouldBePrecededByDLUserData(dataLayerSnapshot) {
        // If not required set to false
        if (!this.eventMustBePrecededByUserData())
            return this.setMissingUserData(false);
        // If we're here we know it's required
        if (
            this.eventWasPrecededByUserData(
                dataLayerSnapshot,
                this.getEventName()
            )
        ) {
            this.setMissingUserData(false);
        } else {
            this.setMissingUserData(true);
        }
    }

    _formatEventID(eventID) {
        if (eventID === undefined) return "N/A";
        return `${eventID.slice(0, 5)}...`;
    }

    getProperties() {
        return {
            eventVerificationStatus: this.isValid() ? "verified" : "failed",
            isMissingUserData: this.isMissingUserData(),
        };
    }

    static shouldProcessEvent(dlEventObject) {
        if (typeof dlEventObject !== "object") return false;
        if (!(dlEventObject.event in this.getEventMap())) return false;
        return true;
    }

    static getEventMap() {
        return {
            dl_view_item: DLEventViewItem,
            dl_add_to_cart: DLEventAddToCart,
            dl_remove_from_cart: DLEventRemoveFromCart,
            dl_select_item: DLEventSelectItem,
            dl_user_data: DLEventUserData,
            dl_view_cart: DLEventViewCart,
            dl_view_item_list: DLEventViewItemList,
            dl_route_change: DLEventRouteChange,
            dl_begin_checkout: DLEventBeginCheckout,
            dl_login: DLEventLogin,
            dl_sign_up: DLEventSignUp,
            dl_search_results: DLEventSearchResults,
        };
    }

    static dlEventFactory(dlEventObject, dataLayer) {
        const dlEvent = DLEvent.getEventMap()[dlEventObject.event];
        const event = new dlEvent(dlEventObject, dataLayer);
        return event;
        // return new DLEvent.getEventMap()[dlEventObject.event](dlEventObject, dataLayer);
    }

    static getGA4Cookie(rawCookieString) {
        if (rawCookieString === undefined) return null;
        const regex = new RegExp("(?<=_ga_).*?(?==)").exec(rawCookieString);
        return regex ? `_ga_${regex[0]}` : null;
    }

    _getRequiredCookieList(rawCookieString) {
        // GA4 cookies have a dynamic format, find the format before determining required list
        // GA4 cookies present?
        return [
            "_fbp",
            "_fbc",
            "_ga",
            "_gaexp",
            "_gid",
            "__utma",
            "ttclid",
            "crto_mapped_user_id",
            "crto_is_user_optout",
            DLEvent.getGA4Cookie(rawCookieString)
                ? DLEvent.getGA4Cookie(rawCookieString)
                : [],
        ];
    }
}

export class DLEventUserData extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_user_data_schema_example,
            dataLayer,
            rawCookieString
        );
    }

    verify() {
        return super.verify({
            cart_total: cartTotal,
            user_properties: this.getUserPropertiesSchema(),
            device: device,
            page: page,
            ecommerce: ecommerce({
                cart_contents: joi
                    .object()
                    .keys({
                        products: ecommerceDLUserDataItems,
                    })
                    .required(),
                currencyCode: currencyCode,
            }),
        });
    }
}

export class DLEventLogin extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_login_schema_example,
            dataLayer,
            rawCookieString
        );
    }
    verify() {
        return super.verify({
            user_properties: this.getUserPropertiesSchema(),
            page: page,
        });
    }
}

export class DLEventSignUp extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_sign_up_schema_example,
            dataLayer,
            rawCookieString
        );
    }

    verify() {
        return super.verify({
            user_properties: this.getUserPropertiesSchema(),
            page: page,
        });
    }
}

export class DLEventViewItem extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_view_item_schema_example,
            dataLayer,
            rawCookieString
        );
    }

    verify() {
        // console.log("Running verify on DLEventViewItem");
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                detail: joi
                    .object()
                    .keys({
                        actionField: joi
                            .object()
                            .keys({
                                list: buildListSchema("action field"),
                                action: buildActionSchema(
                                    "action field",
                                    "detail"
                                ),
                            })
                            .required(),
                        products: products,
                    })
                    .required(),
            }),
        });
    }
}

export class DLEventAddToCart extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_add_to_cart_schema_example,
            dataLayer,
            rawCookieString
        );
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                add: joi
                    .object()
                    .keys({
                        actionField: joi
                            .object()
                            .keys({
                                list: buildListSchema("action field"),
                                action: buildActionSchema(
                                    "action field",
                                    "add"
                                ),
                            })
                            .required(),
                        products: products,
                    })
                    .required(),
            }),
        });
    }
}

export class DLEventBeginCheckout extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_begin_checkout_schema_example,
            dataLayer,
            rawCookieString
        );
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                checkout: joi
                    .object()
                    .keys({
                        actionField: joi
                            .object()
                            .keys({
                                step: buildStepSchema("1"),
                                action: buildActionSchema(
                                    "action field",
                                    "checkout"
                                ),
                            })
                            .required(),
                        products: products,
                    })
                    .required(),
            }),
        });
    }
}

export class DLEventRemoveFromCart extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_remove_from_cart_schema_example,
            dataLayer,
            rawCookieString
        );
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                remove: joi
                    .object()
                    .keys({
                        actionField: joi
                            .object()
                            .keys({
                                list: buildListSchema("action field"),
                            })
                            .required(),
                        products: products,
                    })
                    .required(),
            }),
        });
    }
}

export class DLEventSelectItem extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_select_item_schema_example,
            dataLayer,
            rawCookieString
        );
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                click: joi.object().keys({
                    actionField: joi
                        .object()
                        .keys({
                            list: buildListSchema("action field"),
                            action: buildActionSchema("action field", "click"),
                        })
                        .required(),
                    products: products,
                }),
            }),
        });
    }
}

export class DLEventSearchResults extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_search_results_schema_example,
            dataLayer,
            rawCookieString
        );
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                actionField: joi
                    .object()
                    .keys({
                        list: buildListSchema("action field"),
                    })
                    .required(),
                impressions: impressions,
            }),
        });
    }
}

export class DLEventViewCart extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_view_cart_schema_example,
            dataLayer,
            rawCookieString
        );
    }

    verify() {
        return super.verify({
            cart_total: cartTotal,
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                actionField: joi
                    .object()
                    .keys({
                        list: buildListSchema("action field"),
                    })
                    .required(),
                impressions: impressions,
            }),
        });
    }
}

export class DLEventViewItemList extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_view_item_list_schema_example,
            dataLayer,
            rawCookieString
        );
    }

    verify() {
        return super.verify({
            ecommerce: ecommerce({
                currencyCode: currencyCode,
                impressions: impressions,
            }),
        });
    }
}

export class DLEventRouteChange extends DLEvent {
    constructor(dataLayerObject, dataLayer, rawCookieString) {
        super(
            dataLayerObject,
            dl_route_change_schema_example,
            dataLayer,
            rawCookieString
        );
    }
}
