import { DLEvent } from "./dlEvent.js";
import {
    ecommerce,
    stringSchema,
    ecommerceWithoutWrapper,
    cartTotal,
    userProperties,
    userPropertiesLoggedIn,
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

export class DLEventUserData extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_user_data_schema_example;
        this._eventName = "dl_user_data";
        try {
            this.loggedIn = dataLayerObject.user_properties.visitor_type === "logged_in";
        } catch {
            this.loggedIn = false;
        }
    }

    logVerificationOutcome() {
        super.logVerificationOutcome("If your user is logged in ensure the user_properties object is using the logged in version with email address, order_count etc...")
    }

    verify() {
        return super.verify(
            { user_properties: this.loggedIn ? userPropertiesLoggedIn : userProperties},
            this._eventName,
        );
    }
}

export class DLEventLogin extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_login_schema_example;
        this._eventName = "dl_login";
        try {
            this.loggedIn = dataLayerObject.user_properties.visitor_type === "logged_in";
        } catch {
            this.loggedIn = false;
        }
    }

    verify() {
        return super.verify(
            { user_properties: this.loggedIn ? userPropertiesLoggedIn : userProperties},
            this._eventName,
        );
    }
}

export class DLEventSignUp extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_sign_up_schema_example;
        this._eventName = "dl_sign_up";
        try {
            this.loggedIn = dataLayerObject.user_properties.visitor_type === "logged_in";
        } catch {
            this.loggedIn = false;
        }
    }

    verify() {
        return super.verify(
            { user_properties: this.loggedIn ? userPropertiesLoggedIn : userProperties},
            this._eventName
        );
    }
}

export class DLEventViewItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_view_item_schema_example;
        this._eventName = "dl_view_item";
    }

    verify() {
        return super.verify(
            ecommerceFactory("detail", {
                list: stringSchema(
                    `"list" is a required field on the actionField object and should contain the collection path to the product, or an empty string if not available.`, 
                    `"list" is a required field on the actionField object and should contain the collection path to the product, or an empty string if not available.`,
                    true
                ),
                action: stringSchema(
                    `"action" is a required field on the actionField object and should contain the string "detail"`,
                    `"action" is a required field on the actionField object and should contain the string "detail"`,
                    true
                ),
            }),
            this._eventName,
        );
    }
}

export class DLEventAddToCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_add_to_cart_schema_example;
        this._eventName = "dl_add_to_cart";
    }

    verify() {
        super.verify(
            ecommerceFactory("add", {
                list: stringSchema(
                    `"list" is a required field on the actionField object and should contain the collection path to the product.`,
                    `"list" is a required field on the actionField object and should contain the collection path to the product.`,
                    true
                ),
                action: stringSchema(
                    `"action" is a required field on the actionField object and should contain the string "add"`,
                    `"action" is a required field on the actionField object and should contain the string "add"`,
                    false
                ),
            }),
            this._eventName,
        );
    }
}

export class DLEventBeginCheckout extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_begin_checkout_schema_example;
        this._eventName = "dl_begin_checkout";
    }

    verify() {
        super.verify(
            ecommerceFactory("checkout", {
                step: stringSchema(
                    `"step" is a required field on the actionField object and should contain the string "1".`,
                    `"step" is a required field on the actionField object and should contain the string "1".`,
                    false
                ),
                action: stringSchema(
                    `"action" is a required field on the actionField object and should contain the string "checkout"`,
                    `"action" is a required field on the actionField object and should contain the string "checkout"`,
                    false
                ),
            }),
            this._eventName,
        );
    }
}

export class DLEventRemoveFromCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_remove_from_cart_schema_example;
        this._eventName = "dl_remove_from_cart";
    }

    verify() {
        super.verify(
            ecommerceFactory("remove", {
                list: stringSchema(
                    `"list" is a required field on the actionField object and should contain the collection the product is from. For example "/collections/puzzles".`,
                    `"list" is a required field on the actionField object and should contain the collection the product is from. For example "/collections/puzzles".`,
                    true
                ),
            }),
            this._eventName,
        );
    }
}

export class DLEventSelectItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_select_item_schema_example;
        this._eventName = "dl_select_item";
    }

    verify() {
        super.verify(
            ecommerceFactory("click", {
                list: stringSchema(
                    `"list" is a required field on the actionField object and should contain the collection the product is from. For example "/collections/puzzles".`,
                    `"list" is a required field on the actionField object and should contain the collection the product is from. For example "/collections/puzzles".`,
                    true
                ),
                action: stringSchema(
                    `"action" is a required field on the actionField object and should contain the string "click"`,
                    `"action" is a required field on the actionField object and should contain the string "click"`,
                    false
                ),
            }),
            this._eventName
        );
    }
}

export class DLEventSearchResults extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_search_results_schema_example;
        this._eventName = "dl_search_results";
    }

    verify() {
        super.verify(
            {
                ecommerce: ecommerceWithoutWrapper({
                    actionField: {
                        list: stringSchema(
                            `"list" is a required field on the action field object. It should contain the string "search results"`,
                            `"list" is a required field on the action field object. It should contain the string "search results"`
                        ),
                    },
                }),
            },
            this._eventName,
        );
    }
}

export class DLEventViewCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_view_cart_schema_example;
        this._eventName = "dl_view_cart";
    }

    verify() {
        super.verify(
            {
                cart_total: cartTotal,
                ecommerce: ecommerceWithoutWrapper({
                    actionField: {
                        list: stringSchema(
                            `"list" is a required field on the action field object. It should contain the string "shopping cart"`,
                            `"list" is a required field on the action field object. It should contain the string "shopping cart"`
                        ),
                    },
                }),
            },
            this._eventName
        );
    }
}

export class DLEventViewItemList extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_view_item_list_schema_example;
        this._eventName ="dl_view_item_list";
    }

    verify() {
        super.verify(
            {
                ecommerce: ecommerceWithoutWrapper(),
            },
            this._eventName
        );
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
