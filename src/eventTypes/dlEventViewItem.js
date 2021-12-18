import { DLEvent } from "./dlEvent.js";
import {
    ecommerce,
    stringSchema,
    ecommerceWithoutWrapper,
    cartTotal,
} from "../schemas.js";
import { dl_view_item_schema_example } from "../exampleSchemaObjects/dl_view_item.js";
import { dl_add_to_cart_schema_example } from "../exampleSchemaObjects/dl_add_to_cart.js";
import { dl_begin_checkout_schema_example } from "../exampleSchemaObjects/dl_begin_checkout.js";
import { dl_remove_from_cart_schema_example } from "../exampleSchemaObjects/dl_remove_from_cart.js";
import { dl_search_results_schema_example } from "../exampleSchemaObjects/dl_search_results.js";
import { dl_view_cart_schema_example } from "../exampleSchemaObjects/dl_view_cart.js";
import { dl_view_item_list_schema_example } from "../exampleSchemaObjects/dl_view_item_list.js";

export class DLEventViewItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_view_item_schema_example;
    }

    verify() {
        return super.verify(
            ecommerceFactory("detail", {
                list: stringSchema(
                    `"list" is a required field on the actionField object and should contain the collection path to the product.`
                ),
                action: stringSchema(
                    `"action" is a required field on the actionField object and should contain the string "detail"`
                ),
            }),
            "dl_view_item"
        );
    }
}

export class DLEventAddToCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_add_to_cart_schema_example;
    }

    verify() {
        super.verify(
            ecommerceFactory("add", {
                list: stringSchema(
                    `"list" is a required field on the actionField object and should contain the collection path to the product.`
                ),
                action: stringSchema(
                    `"action" is a required field on the actionField object and should contain the string "add"`
                ),
            }),
            "dl_add_to_cart"
        );
    }
}

export class DLBeginCheckout extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_begin_checkout_schema_example;
    }

    verify() {
        super.verify(
            ecommerceFactory("checkout", {
                step: stringSchema(
                    `"step" is a required field on the actionField object and should contain the string "1".`
                ),
                action: stringSchema(
                    `"action" is a required field on the actionField object and should contain the string "checkout"`
                ),
            }),
            "dl_begin_checkout"
        );
    }
}

export class DLEventRemoveFromCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_remove_from_cart_schema_example;
    }

    verify() {
        super.verify(
            ecommerceFactory("remove", {
                list: stringSchema(
                    `"list" is a required field on the actionField object and should contain the collection the product is from. For example "/collections/puzzles".`
                ),
            }),
            "dl_remove_from_cart"
        );
    }
}

export class DLEventSearchResults extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_search_results_schema_example;
    }

    verify() {
        super.verify(
            {
                ecommerce: ecommerceWithoutWrapper({
                    actionField: {
                        list: stringSchema({
                            "any.required": `"list" is a required field on the action field object. It should contain the string "search results"`,
                        }),
                    },
                }),
            },
            "dl_search_results"
        );
    }
}

export class DLEventViewCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_view_cart_schema_example;
    }

    verify() {
        super.verify(
            {
                cart_total: cartTotal,
                ecommerce: ecommerceWithoutWrapper({
                    actionField: {
                        list: stringSchema({
                            "any.required": `"list" is a required field on the action field object. It should contain the string "shopping cart"`,
                        }),
                    },
                }),
            },
            "dl_view_cart"
        );
    }
}

export class DLEventViewItemList extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_view_item_list_schema_example;
    }

    verify() {
        super.verify(
            {
                ecommerce: ecommerceWithoutWrapper(),
            },
            "dl_view_item_list"
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
