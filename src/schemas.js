// This file contains all schemas to check dl items against.
import joi from "joi";

export const impressions = joi
    .array()
    .items(
        joi.object({
            name: joi.string().min(1).required(),
            id: joi.string().min(2).required().messages({
                "any.only": `"id" should be a string representing the Shopify product SKU.`,
                "any.required": `"id" is a required field on the impressions array constituent objects and should be a string containing the product SKU`,
            }),
            product_id: joi.string().min(5).required().messages({
                "any.only": `"product_id" should be a string representing the Shopify product ID.`,
                "any.required": `"product_id" is a required field on the impressions array constituent objects and should be a string containing the product ID.`,
            }),
            variant_id: joi.string().min(2).required().messages({
                "any.only": `"variant_id" should be a string representing the Shopify variant ID.`,
                "any.required": `"variant_id" is a required field on the impressions array constituent objects and should represent the Shopify variant ID.`,
            }),
            brand: joi.string().required().messages({
                "any.only": `"brand" should be a string representing the product's brand.`,
                "any.required": `"brand" is a required field on the impressions array constituent objects. If a brand can't be determined use an empty string.`,
            }),
            category: joi.string().required().messages({
                "any.only": `"category" should be a string representing the product's category. For example "Toys".`,
                "any.required": `"category" is a required field on the impressions array constituent objects. This represents the category from which the product is from. A Chess board might have a category of "board_game".`,
            }),
            price: joi.string().required().messages({
                "any.only": `"price" should be a string representing the product's category price.`,
                "any.required": `"price" is a required field on the impressions array constituent objects.`,
            }),
            position: joi.number().required().messages({
                "any.only": `"position" should be an integer representing the product's position in the impressions array, indexed from 1.`,
                "any.required": `"position" is a required field on the impressions array constituent objects. It should contain the position in the list for each array element. For example, the first element should be have the value 1(integer), the next, 2 etc...`,
            }),
            list: joi.string().allow("").required().messages({
                "any.only": `"list" should be an string representing the collection the product is from, for example "/collections/toys".`,
                "any.required": `"list" is a required field on the impressions array constituent objects. It should contain the path to the collection to product is from. For example "/collections/toys"`,
            }),
        }) // Must match
    )
    .min(1)
    .required()
    .messages({
        "any.only": `"impressions" should be an array representing a collection of products, see documentation for details.`,
        "any.required": `You must have at least one product in the "impressions" array.`,
    });

export const products = joi
    .array()
    .items(
        joi.object({
            name: joi.string().min(1).required(),
            id: joi.string().min(2).required().messages({
                "any.only": `"id" should be a string representing the Shopify product SKU.`,
                "any.required": `"id" is a required field on the products array constituent objects and should be a string containing the product SKU`,
            }),
            product_id: joi.string().min(5).required().messages({
                "any.only": `"product_id" should be a string representing the Shopify product ID.`,
                "any.required": `"product_id" is a required field on the products array constituent objects and should be a string containing the product ID.`,
            }),
            variant_id: joi.string().min(2).required().messages({
                "any.only": `"variant_id" should be a string representing the Shopify variant ID.`,
                "any.required": `"variant_id" is a required field on the products array constituent objects and should represent the Shopify variant ID.`,
            }),
            image: joi.string().messages({
                "any.only": `"image" should be a URL that links to an image of to product.`,
                "any.required": `"image" is an optional field on the ecommerce object and should be a valid URL.`,
            }),
            brand: joi.string().required().messages({
                "any.only": `"brand" should be a string representing the product's brand.`,
                "any.required": `"brand" is a required field on the products array constituent objects. If a brand can't be determined use an empty string.`,
            }),
            category: joi.string().required().messages({
                "any.only": `"category" should be a string representing the product's category. For example "Toys".`,
                "any.required": `"category" is a required field on the products array constituent objects. This represents the category from which the product is from. A Chess board might have a category of "board_game".`,
            }),
            variant: joi.string().allow(null).messages({
                "any.only": `"variant" should be a string representing the product's variant name, for example "Large Shirt", "Blue brush" etc...`,
                "string.base": `"variant" should be a descriptive name of the product variant.`,
                "any.required": `"variant" is a required field on the ecommerce object.`,
            }),
            price: joi.string().required().messages({
                "any.only": `"price" should be a string representing the product's category price.`,
                "any.required": `"price" is a required field on the ecommerce object.`,
            }),
            inventory: joi.string().messages({
                "any.only": `"inventory" should be a string representing the quantity in stock for the product. For example: "22"`,
                "any.required": `"inventory" is an optional field on the ecommerce object, it should be a string representing inventory quantity, for example: "22".`,
            }),
        }) // Must match
    )
    .min(1)
    .required()
    .messages({
        "any.only": `"products" should be an array representing a collection of products, see documentation for details.`,
        "any.required": `You must have at least one product in the "products" array.`,
    });

export const eventId = joi.string().min(5).required().messages({
    "any.only": `"event_id" should be a UUID.`,
    "any.required": `"event_id" is a required field. It should be a UUID like value.`,
});

export const cartTotal = joi.string().min(2).required().messages({
    "any.only": `"cart_total" should be a string representing the value of the cart. For example "26.99".`,
    "any.required": `"cart_total" is a required field. It should be a string representing the total value of the cart, for example "26.99".`,
});

export const getEventNameSchema = function (eventName) {
    return joi.string().valid(eventName).required().messages({
        "any.only": `"event" should be a string representing the event name, for example "dl_add_to_cart".`,
        "any.required": `"event" is a required field on the data layer object and should contain and event name such as dl_view_item, dl_add_to_cart etc...`,
    });
};

export const ecommerce = (conts) =>
    joi
        .object()
        .keys({
            currencyCode: joi.string().min(3).max(3).required().messages({
                "any.only": `"currencyCode" should be a string representing the currency, for example "USD".`,
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
            "any.only": `"ecommerce" is a required field on the event object. See documentation for the required fields.`,
            "any.required": `"ecommerce" is a required field on the data layer object.`,
        });

export const ecommerceWithoutWrapper = (actionField) =>
    joi
        .object()
        .keys({
            currencyCode: joi.string().min(3).max(3).required().messages({
                "any.only": `"currencyCode" should be a string representing the currency, for example "USD".`,
                "any.required": `"currencyCode" is a required field on the ecommerce object and should contain a currency code such as "USD".`,
            }),
            ...(actionField && {
                actionField: actionField,
            }),
            impressions: impressions,
        })
        .required()
        .messages({
            "any.only": `"ecommerce" is a required field on the event object. See documentation for the required fields.`,
            "any.required": `"ecommerce" is a required field on the data layer object.`,
        });

export const stringSchema = (only, required, emptyString) => {
    if (!emptyString) {
        return joi.string().required().messages({
            "any.only": only,
            "any.required": required,
        });
    } else {
        return joi.string().allow("").required().messages({
            "any.only": only,
            "any.required": required,
        }); 
    }

}

export const actionField = (action) =>
    joi
        .object()
        .keys({ ...action })
        .required();

export const userPropertiesLoggedIn = joi
    .object()
    .keys({
        visitor_type: joi
            .any()
            .valid("logged_in")
            .required()
            .messages({
                "any.only": `"visitor_type" should be one of "logged in".`,
                "any.required": `"visitor_type" is a required field on the user_properties object and should be one of "logged in" or "guest", depending on whether the user is logged in or not.`,
            }),
        customer_id: joi.string().required().messages({
            "any.only": `"customer_id" should be a string representing the Shopify customer ID.`,
            "any.required": `"customer_id" is a required field on the user_properties object and should contain the Shopify customer id.`,
        }),
        customer_email: joi.string().required().messages({
            "any.only": `"customer_email" should be a string representing the customers email stored in Shopify.`,
            "any.required": `"customer_email" is a required field on the user_properties object and should contain the customer email.`,
        }),
        customer_order_count: joi.string().required().messages({
            "any.only": `"customer_order_count" should be a string representing the customers total order count.`,
            "any.required": `"customer_order_count" is a required field on the user_properties object and should contain the order count for the customer.`,
        }),
        customer_total_spent: joi.string().required().messages({
            "any.only": `"customer_total_spent" should be a string representing the total spent by this customer in the store.`,
            "any.required": `"customer_total_spent" is a required field on the user_properties object and should be a string containing the total spent by the customer.`,
        }),
    })
    .required()
    .messages({
        "any.only": `"user_properties" should be an object representing the Shopify user properties. See documentation for more details.`,
        "any.required": `"user_properties" is a required field on the data layer object`,
    });

export const userProperties = joi
    .object()
    .keys({
        visitor_type: joi
            .any().valid("guest")
            .required()
            .messages({
                "any.only": `"visitor_type" should be one of "logged in" or "guest".`,
                "any.required": `"visitor_type" is a required field on the user_properties object and should be one of "logged in" or "guest".`,
            }),
        user_id: joi.string().messages({
            "any.only": `"user_id" should be the Shopify user ID.`,
            "any.required": `"user_id" is a required field on the user_properties object and should contain the Shopify user id.`,
        }),
        user_consent: joi.string().allow("").required().messages({
            "any.only": `"user_consent" should contain the user consent variable from Shopfy. If no value is available use an empty string.`,
            "any.required": `"user_consent" is a required field on the user_properties object and should contain an empty string if no consent is present.`,
        }),
    })
    .required()
    .messages({
        "any.only": `"user_properties" should be an object representing the Shopify user properties. See documentation for more details.`,
        "any.required": `"user_properties" is a required field on the data layer object`,
    });
