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
