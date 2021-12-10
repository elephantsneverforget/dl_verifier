import joi from "joi";
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
            image: joi.string().required().messages({
                "any.required": `"image" is a required field on the ecommerce object and should be a valid URL.`,
            }),
            brand: joi.string().required().messages({
                "any.required": `"brand" is a required field on the ecommerce object.`,
            }),
            category: joi.string().required().messages({
                "any.required": `"category" is a required field on the ecommerce object.`,
            }),
            variant: joi.string().required().messages({
                "any.required": `"variant" is a required field on the ecommerce object.`,
            }),
            price: joi.string().required().messages({
                "any.required": `"price" is a required field on the ecommerce object.`,
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

export const getEventNameSchema = function (eventName) {
    return joi.string().valid(eventName).required().messages({
        "any.required": `"event" is a required field on the data layer object and should contain and event name such as dl_view_item, dl_add_to_cart etc...`, })
};

export const ecommerce = joi.object().keys({
    currencyCode: joi.string().min(3).max(3).required().messages({
        "any.required": `"currencyCode" is a required field on the ecommerce object and should contain a currency code such as "USD".`,
    }),
    detail: joi.object().keys({
        actionField: joi.object().keys({
            list: joi.string().required().messages({
                "any.required": `"list" is a required field on the actionField object and should contain the collection path to the product.`,
            }),
            action: joi.string().required().messages({
                "any.required": `"action" is a required field on the actionField object and should contain the string 'detail'`,
            }),
        }).required(),
        products: products
    }).required()
}).required().messages({
    'any.required': `"ecommerce" is a required field on the data layer object.`
});