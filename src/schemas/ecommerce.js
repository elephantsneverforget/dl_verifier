import joi from 'joi';
import { products } from "./products.js"
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