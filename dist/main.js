import Joi from 'joi';

Joi.string().min(7).required().messages({
    "any.required": `"event_id" is a required field. It should be a UUID like value.`,
});

const products = Joi.array().items(
    Joi.object({
        name: Joi.string().min(1).required(),
        id: Joi.string().min(10).required()
            .messages({
                'any.required': `"id" is a required field on the ecommerce object and should represent the product SKU`
            }),
        product_id: Joi.string().min(10).required()
            .messages({
                'any.required': `"product_id" is a required field on the ecommerce object and should represent the product ID.`
            }),
        variant_id: Joi.string().min(2).required()
            .messages({
                'any.required': `"product_id" is a required field on the ecommerce object and should represent the Shopify variant ID.`
            }),
        image: Joi.string().required()
            .messages({
                'any.required': `"image" is a required field on the ecommerce object and should be a valid URL.`
            }),
        price: Joi.string().required()
            .messages({
                'any.required': `"price" is a required field on the ecommerce object.`
            }),
    }) // Must match
).min(1).required().messages({
    'any.required': `"ecommerce" is a required field on object.`
});

Joi.object().keys({
    currencyCode: Joi.string().min(3).max(3).required(),
    detail: Joi.object().keys({
        actionField: Joi.object().keys({
            list: Joi.string().required().error(() => new Error("The action field must have a list property that contains a string.")),
            action: Joi.string().required(),
        }).required(),
        products: products
    }).required()
}).required().messages({
    'any.required': `"ecommerce" is a required field.`
});
