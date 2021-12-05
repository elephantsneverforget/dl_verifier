import Joi from 'joi';
import { products } from "./products"
export const ecommerce = Joi.object().keys({
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