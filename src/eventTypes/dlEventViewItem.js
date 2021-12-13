import joi from "joi";
import { DLEvent } from "./dlEvent.js";
import { ecommerce, currencyCode, products } from "../schemas.js";
import { dl_view_item_schema_example } from "../exampleSchemaObjects/dl_view_item.js";
import { dl_add_to_cart_schema_example } from "../exampleSchemaObjects/dl_add_to_cart.js";
import { dl_begin_checkout_schema_example } from "../exampleSchemaObjects/dl_begin_checkout.js";

export class DLEventViewItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_view_item_schema_example;
    }

    // Add anything additional to 'event_id' and 'event' that requires verification.
    verify() {
        return super.verify(
            {
                ecommerce: joi
                    .object({
                        currencyCode: currencyCode,
                        detail: joi
                            .object()
                            .keys({
                                actionField: joi
                                    .object()
                                    .keys({
                                        list: joi.string().required().messages({
                                            "any.required": `"list" is a required field on the actionField object and should contain the collection path to the product.`,
                                        }),
                                        action: joi
                                            .string()
                                            .required()
                                            .messages({
                                                "any.required": `"action" is a required field on the actionField object and should contain the string "detail"`,
                                            }),
                                    })
                                    .required(),
                                products: products,
                            })
                            .required()
                            .messages({
                                "any.required": `The ecommerce object requires a property called "detail"`,
                            }),
                    })
                    .required()
                    .messages({
                        "any.required": `"ecommerce" is a required field on the data layer object.`,
                    }),
            },
            "dl_view_item"
        );
    }
}

export class DLEventAddToCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_add_to_cart_schema_example;
    }

    // Add anything additional to 'event_id' and 'event' that requires verification.
    verify() {
        return super.verify(
            {
                ecommerce: joi
                    .object({
                        currencyCode: currencyCode,
                        add: joi
                            .object()
                            .keys({
                                actionField: joi
                                    .object()
                                    .keys({
                                        list: joi.string().required().messages({
                                            "any.required": `"list" is a required field on the actionField object on an add to cart event and should contain the collection path to the product.`,
                                        }),
                                        action: joi
                                            .string()
                                            .required()
                                            .messages({
                                                "any.required": `"action" is a required field on the actionField object on an add to cart event and should contain the string "add"`,
                                            }),
                                    })
                                    .required(),
                                products: products,
                            })
                            .required()
                            .messages({
                                "any.required": `The ecommerce object on add to cart requires a property called "add".`,
                            }),
                        // ecommerce: ecommerce('add', 'add'),
                    })
                    .required()
                    .messages({
                        "any.required": `"ecommerce" is a required field on the data layer object.`,
                    }),
            },
            "dl_add_to_cart"
        );
    }
}

export class DLBeginCheckout extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this._schemaExample = dl_begin_checkout_schema_example;
    }

    // Add anything additional to 'event_id' and 'event' that requires verification.
    verify() {
        return super.verify(
            {
                ecommerce: joi
                    .object({
                        currencyCode: currencyCode,
                        checkout: joi
                            .object()
                            .keys({
                                actionField: joi
                                    .object()
                                    .keys({
                                        step: joi.string().required().messages({
                                            "any.required": `"setp" is a required field on the actionField object and should contain the string "1".`,
                                        }),
                                        action: joi
                                            .string()
                                            .required()
                                            .messages({
                                                "any.required": `"action" is a required field on the actionField object and should contain the string "checkout"`,
                                            }),
                                    })
                                    .required(),
                                products: products,
                            })
                            .required()
                            .messages({
                                "any.required": `The ecommerce object requires a property called "checkout" on a begin checkout event.`,
                            }),
                    })
                    .required()
                    .messages({
                        "any.required": `"ecommerce" is a required field on the data layer object.`,
                    }),
            },
            "dl_begin_checkout"
        );
    }
}
