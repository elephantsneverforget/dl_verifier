// This file contains all schemas to check dl items against.
import joi from "joi";

export const impressions = joi
    .array()
    .items(
        joi.object({
            name: joi.string().min(1).required(),
            id: joi.string().min(2).required().messages({
                "any.required": `"id" is a required field on the impressions array constituent objects and should represent the product SKU`,
            }),
            product_id: joi.string().min(5).required().messages({
                "any.required": `"product_id" is a required field on the impressions array constituent objects and should represent the product ID.`,
            }),
            variant_id: joi.string().min(2).required().messages({
                "any.required": `"product_id" is a required field on the impressions array constituent objects and should represent the Shopify variant ID.`,
            }),
            brand: joi.string().required().messages({
                "any.required": `"brand" is a required field on the impressions array constituent objects.`,
            }),
            category: joi.string().required().messages({
                "any.required": `"category" is a required field on the impressions array constituent objects.`,
            }),
            price: joi.string().required().messages({
                "any.required": `"price" is a required field on the impressions array constituent objects.`,
            }),
            position: joi.number().required().messages({
                "any.required": `"position" is a required field on the impressions array constituent objects. It should contain the position in the list for each array element. For example, the first element should be have the value 1(integer), the next, 2 etc...`,
            }),
            list: joi.string().required().messages({
                "any.required": `"list" is a required field on the impressions array constituent objects. It should contain the path to the collection. For example "/collections/toys"`,
            }),
        }) // Must match
    )
    .min(1)
    .required()
    .messages({
        "any.required": `You must have at least one product in the "impressions" array.`,
    });

export const products = joi
    .array()
    .items(
        joi.object({
            name: joi.string().min(1).required(),
            id: joi.string().min(2).required().messages({
                "any.required": `"id" is a required field on the ecommerce object and should represent the product SKU`,
            }),
            product_id: joi.string().min(5).required().messages({
                "any.required": `"product_id" is a required field on the ecommerce object and should represent the product ID.`,
            }),
            variant_id: joi.string().min(2).required().messages({
                "any.required": `"product_id" is a required field on the ecommerce object and should represent the Shopify variant ID.`,
            }),
            image: joi.string().messages({
                "any.required": `"image" is a required field on the ecommerce object and should be a valid URL.`,
            }),
            brand: joi.string().required().messages({
                "any.required": `"brand" is a required field on the ecommerce object.`,
            }),
            category: joi.string().required().messages({
                "any.required": `"category" is a required field on the ecommerce object.`,
            }),
            variant: joi.string().messages({
                "string.base": `"variant" should be a descriptive name of the product variant.`,
                "any.required": `"variant" is a required field on the ecommerce object.`,
            }),
            price: joi.string().required().messages({
                "any.required": `"price" is a required field on the ecommerce object.`,
            }),
            inventory: joi.string().messages({
                "any.required": `"inventory" is an optional field on the ecommerce object.`,
            }),
        }) // Must match
    )
    .min(1)
    .required()
    .messages({
        "any.required": `You must have at least one product in the "products" array.`,
    });

export const eventId = joi.string().min(7).required().messages({
    "any.required": `"event_id" is a required field. It should be a UUID like value.`,
});

export const cartTotal = joi.string().min(2).required().messages({
    "any.required": `"cart_total" is a required field. It should contain the total value of the cart.`,
});

export const getEventNameSchema = function (eventName) {
    return joi.string().valid(eventName).required().messages({
        "any.required": `"event" is a required field on the data layer object and should contain and event name such as dl_view_item, dl_add_to_cart etc...`,
    });
};

export const ecommerce = (conts) =>
    joi
        .object()
        .keys({
            currencyCode: joi.string().min(3).max(3).required().messages({
                "any.required": `"currencyCode" is a required field on the ecommerce object and should contain a currency code such as "USD".`,
            }),
            [conts["ecommerceSubFieldWrapper"]]: joi
                .object()
                .keys({
                    actionField: actionField(conts["actionField"]),
                    products: products,
                })
                .required(),
        })
        .required()
        .messages({
            "any.required": `"ecommerce" is a required field on the data layer object.`,
        });

export const ecommerceWithoutWrapper = (actionField) =>
    joi
        .object()
        .keys({
            currencyCode: joi.string().min(3).max(3).required().messages({
                "any.required": `"currencyCode" is a required field on the ecommerce object and should contain a currency code such as "USD".`,
            }),
            ...(actionField && {
                actionField: actionField,
            }),
            impressions: impressions,
        })
        .required()
        .messages({
            "any.required": `"ecommerce" is a required field on the data layer object.`,
        });

export const stringSchema = (message) =>
    joi.string().required().messages({
        "any.required": message,
    });

export const actionField = (action) =>
    joi
        .object()
        .keys({ ...action })
        .required();

export const user_properties_logged_in = joi
    .object()
    .keys({
        visitor_type: joi
            .string()
            .pattern(new RegExp("^logged in$"))
            .required()
            .messages({
                "any.required": `"visitor_type" is a required field on the user_properties object and should be one of "logged in" or "guest".`,
            }),
        customer_id: joi.string().required().messages({
            "any.required": `"customer_id" is a required field on the user_properties object and should contain the Shopify customer id.`,
        }),
        customer_email: joi.string().required().messages({
            "any.required": `"customer_email" is a required field on the user_properties object and should contain the customer email.`,
        }),
        customer_order_count: joi.string().required().messages({
            "any.required": `"customer_order_count" is a required field on the user_properties object and should contain the order count for the customer.`,
        }),
        customer_total_spent: joi.string().required().messages({
            "any.required": `"customer_total_spent" is a required field on the user_properties object and should contain the total spent by the customer.`,
        }),
    })
    .required()
    .messages({
        "any.required": `"user_properties" is a required field on the data layer object`,
    });

export const userProperties = joi
    .object()
    .keys({
        visitor_type: joi
            .string()
            .pattern(new RegExp("^guest$"))
            .required()
            .messages({
                "any.required": `"visitor_type" is a required field on the user_properties object and should be one of "logged in" or "guest".`,
            }),
        user_id: joi.string().required().messages({
            "any.required": `"user_id" is a required field on the user_properties object and should contain the Shopify customer id.`,
        }),
        user_consent: joi.string().allow("").required().messages({
            "any.required": `"user_consent" is a required field on the user_properties object and should contain an empty string if no consent is present.`,
        }),
    })
    .required()
    .messages({
        "any.required": `"user_properties" is a required field on the data layer object`,
    });
