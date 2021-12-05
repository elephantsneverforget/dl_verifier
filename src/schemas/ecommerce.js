import joi from 'joi';
import { products } from "./products"
export const ecommerce = joi.object().keys({
    currencyCode: joi.string().min(3).max(3).required(),
    detail: joi.object().keys({
        actionField: joi.object().keys({
            list: joi.string().required().error(() => new Error("The action field must have a list property that contains a string.")),
            action: joi.string().required(),
        }).required(),
        products: products
    }).required()
}).required().messages({
    'any.required': `"ecommerce" is a required field.`
});