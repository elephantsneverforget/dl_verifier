import Joi from 'joi';
export const products = Joi.array().items(
    Joi.object({
        name: Joi.string().alphanum().min(1).required(),
        id: Joi.string().alphanum().min(10).required()
            .messages({
                'any.required': `"id" is a required field on the ecommerce object and should represent the product SKU`
            }),
        product_id: Joi.string().alphanum().min(10).required()
            .messages({
                'any.required': `"product_id" is a required field on the ecommerce object and should represent the product ID.`
            }),
        variant_id: Joi.string().alphanum().min(2).required()
            .messages({
                'any.required': `"product_id" is a required field on the ecommerce object and should represent the Shopify variant ID.`
            }),
        image: Joi.string().alphanum().required()
            .messages({
                'any.required': `"image" is a required field on the ecommerce object and should be a valid URL.`
            }),
        price: Joi.string().alphanum().required()
            .messages({
                'any.required': `"price" is a required field on the ecommerce object.`
            }),
    }).min(2).required() // Must match
);