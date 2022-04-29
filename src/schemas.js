// This file contains all schemas to check dl items against.
import joi from "joi";

export const crtoMappedUserId = joi.string().allow("").required().messages({
    "any.required": `"crto_mapped_user_id" should be a string representing the crto_mapped_user_id cookie. See documentation for more details.`,
});

export const ttclid = joi.string().allow("").required().messages({
    "any.required": `"ttclid" should be a string representing the ttclid cookie from TikTok. See documentation for more details.`,
});

export const crtoIsUserOptout = joi.string().allow("").required().messages({
    "any.required": `"crto_is_user_optout" should be a string representing the crto_is_user_optout cookie. See documentation for more details.`,
});

export const fbp = joi.string().allow("").required().messages({
    "any.required": `"_fbp" should be a string representing the _fbp cookie. See documentation for more details.`,
});

export const ga = joi.string().allow("").required().messages({
    "any.required": `"_ga" should be a string representing the ga_XXXXXXXX cookie. See documentation for more details.`,
});

export const ga4 = joi.string().allow("").required().messages({
    "any.required": `"_ga_XXXXXXXX" should be a string representing the GA4 cookie. See documentation for more details.`,
});

const category = joi.string().allow("").required().messages({
    "any.required": `"category" is a required field on the impressions and products array constituent objects. This represents the category from which the product is from. A Chess board might have a category of "board_game".`,
});

const name = joi.string().required().messages({
    "any.required": `"name" is a required field and should be in the impressions and products array constituent objects. It should represent the name of the product.`,
});

const SKU = joi.string().allow("").required().messages({
    "any.required": `"id" is a required field on the impressions and products array constituent objects. It should be a string containing the product SKU`,
});

const productId = joi.string().min(5).required().messages({
    "any.required": `"product_id" is a required field on the impressions and products array constituent objects. It should be a string containing the product ID.`,
});

const variantId = joi.string().min(2).required().messages({
    "any.required": `"variant_id" is a required field on the impressions and products array constituent objects. It should be a string representing the Shopify variant ID.`,
});

const brand = joi.string().allow("").required().messages({
    "any.required": `"brand" is a required field on the impressions and products array constituent objects. If a brand can't be determined use an empty string.`,
});

const price = joi.string().required().messages({
    "any.required": `"price" is a required field on the impressions and products array constituent objects. It should be a string representing the price of the product, for example "125.99"`,
});

const position = joi.number().required().messages({
    "any.required": `"position" is a required field on the impressions array constituent objects. It should contain the position in the list for each array element. For example, the first element should be have the value 1(integer), the next, 2 etc...`,
});

const list = joi.string().required().optional().messages({
    "any.required": `"list" is a required field on the impressions array constituent objects. It should contain the path to the collection the product is from. For example "/collections/toys"`,
});

export const buildListSchema = (locations) => {
    return joi
        .string()
        .required()
        .messages({
            "any.required": `"list" is a required field on the ${locations} object. It should contain the path to the collection the product was visited from. For example "/collections/toys"`,
        });
};

export const ecommerce = (contents) => {
    return joi.object().keys(contents).required();
};

const image = joi.string().allow("").messages({
    "any.required": `"image" is an optional field on the ecommerce object and should be a valid URL.`,
});

const variant = joi.string().allow("").messages({
    "string.base": `"variant" should be a descriptive name of the product variant, for example "Blue shirt"`,
    "any.required": `"variant" is a required field on the ecommerce object.`,
});

const inventoryString = `"inventory" should be a string representing the quantity in stock for the product. For example: "22"`;
const inventory = joi.string().allow("").messages({
    "any.all": inventoryString,
    "any.required": inventoryString,
});

export const userId = joi.string().required().messages({
    "any.required": `"user_id" is a required field on the user_properties object and should contain a unique identifier for your user that is persisted across sessions.`,
});

export const userConsent = joi.string().allow("").messages({
    "any.required": `"user_consent" is a required field on the user_properties object and should contain an empty string if no consent is present.`,
});

const customerId = joi.string().required().messages({
    "any.required": `"customer_id" is a required field on the user_properties object when the customer is logged in, it should contain the Shopify customer id.`,
});
const customerEmail = joi.string().required().messages({
    "any.required": `"customer_email" is a required field on the user_properties object when the customer is logged in, it should contain the customer email.`,
});
const customerOrderCount = joi.string().required().messages({
    "any.required": `"customer_order_count" is a required field on the user_properties object when the customer is logged in, it should contain the order count for the customer.`,
});
const customerTotalSpent = joi.string().required().messages({
    "any.required": `"customer_total_spent" is a required field on the user_properties object when the customer is logged in, it should be a string containing the total spent by the customer.`,
});
const customerAddress1 = joi.string().required().messages({
    "any.required": `"customer_address_1" is a required field on the user_properties object when the user is logged in and should be a string containing the first line of the customer's address.`,
});
const customerAddress2 = joi.string().allow(null, "").required().messages({
    "any.required": `"customer_address_2" is a required field on the user_properties object when the user is logged in and should be a string containing the second line of the customer's address.`,
});
const customerCity = joi.string().required().messages({
    "any.required": `"customer_city" is a required field on the user_properties object when the user is logged in and should be a string containing the customer's city.`,
});
const customerCountry = joi.string().required().messages({
    "any.required": `"customer_country" is a required field on the user_properties object when the user is logged in and should be a string containing the customer's country.`,
});
const customerFirstName = joi.string().required().messages({
    "any.required": `"customer_first_name" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's first name.`,
});
const customerLastName = joi.string().required().messages({
    "any.required": `"customer_last_name" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's last name.`,
});
const customerPhone = joi.string().required().messages({
    "any.required": `"customer_phone" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's phone number.`,
});
const customerProvince = joi.string().required().messages({
    "any.required": `"customer_province" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's province or state.`,
});
const customerProvinceCode = joi.string().required().messages({
    "any.required": `"customer_province_code" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's province code for example SC or AB.`,
});
const customerZip = joi.string().required().messages({
    "any.required": `"customer_zip" is a required field on the user_properties object when the user is logged in and should be a string representing the customer's zip or postal code.`,
});
export const buildStepSchema = (stepNumber) => {
    return joi
        .any()
        .valid(stepNumber)
        .required()
        .messages({
            "any.required": `"step" is a required field on the actionField object and should contain the string "${stepNumber}".`,
        });
};
export const visitorType = joi
    .any()
    .valid("guest", "logged_in")
    .required()
    .messages({
        "any.only": `"visitor_type" should be one of "logged_in" or "guest".`,
        "any.required": `"visitor_type" is a required field on the user_properties object and should be one of "logged in" or "guest".`,
    });

export const eventId = joi.string().min(5).required().messages({
    "any.required": `"event_id" is a required field. It should be a UUID like value.`,
});

export const cartTotal = joi.string().min(2).required().messages({
    "any.required": `"cart_total" is a required field. It should be a string representing the total value of the cart, for example "26.99".`,
});

export const currencyCode = joi.string().min(3).max(3).required().messages({
    "any.required": `"currencyCode" is a required field on the ecommerce object, it should be 3 characters long and contain a currency code such as "USD".`,
});

export const buildActionSchema = (location, stringName) => {
    return joi
        .string()
        .allow(stringName)
        .required()
        .messages({
            "any.required": `"action" is a required field on the ${location} object and should contain the string "${stringName}"`,
        });
};

export const userProperties = joi
    .object()
    .keys({
        visitor_type: visitorType,
        user_id: userId,
        user_consent: userConsent,
    })
    .required()
    .messages({
        "any.required": `"user_properties" should be an object representing the Shopify user properties. See documentation for more details.`,
    });

export const getMarketingSchema = (cookies) => {
    return joi
        .object()
        .keys({
            user_id: userId,
            ...(typeof cookies["_fbp"] !== "undefined" && { _fbp: fbp }),
            // ...(cookies["_fbc"]) && {_fbc: fbc},
            ...(typeof cookies["_ga"] !== "undefined") && {_ga: ga},
            // ...(cookies["_gaexp"]) && {_gaexp: gaexp},
            // _ga: ga,
            // [joi.string()
            // .pattern(new RegExp('^_ga_.*$'))]: ga4,
            // ttclid: ttclid,
            // crto_mapped_user_id: crtoMappedUserId,
            // crto_is_user_optout: crtoIsUserOptout,
        })
        .required()
        .messages({
            "any.required": `"marketing" should be an object representing all relevant marketing cookie data. The minimal object will contain at least a user_id property. See documentation for more details.`,
        });
};

export const impressions = joi
    .array()
    .items({
        name: name,
        id: SKU,
        product_id: productId,
        variant_id: variantId,
        brand: brand,
        category: category,
        price: price,
        position: position,
        list: list,
    })
    .min(1)
    .required()
    .messages({
        "any.required": `You must have at least one product in the "impressions" array.`,
    });

export const products = joi
    .array()
    .items({
        name: name,
        id: SKU,
        product_id: productId,
        variant_id: variantId,
        image: image,
        brand: brand,
        category: category,
        variant: variant,
        price: price,
        inventory: inventory,
    })
    .min(1)
    .required()
    .messages({
        "any.required": `You must have at least one product in the "products" array.`,
    });

export const getEventNameSchema = (eventName) => {
    return joi.string().valid(eventName).required().messages({
        "any.required": `"event" is a required field on the data layer object and should contain and event name such as dl_view_item, dl_add_to_cart etc...`,
    });
};

export const userPropertiesLoggedIn = joi
    .object()
    .keys({
        user_consent: userConsent,
        user_id: userId,
        visitor_type: visitorType,
        customer_id: customerId,
        customer_email: customerEmail,
        customer_order_count: customerOrderCount,
        customer_total_spent: customerTotalSpent,
        customer_address_1: customerAddress1,
        customer_address_2: customerAddress2,
        customer_city: customerCity,
        customer_country: customerCountry,
        customer_first_name: customerFirstName,
        customer_last_name: customerLastName,
        customer_phone: customerPhone,
        customer_province: customerProvince,
        customer_province_code: customerProvinceCode,
        customer_zip: customerZip,
    })
    .required()
    .messages({
        "any.required": `"user_properties" is a required field on the data layer object`,
    });

export const userPropertiesNotLoggedIn = joi
    .object()
    .keys({
        user_consent: userConsent,
        user_id: userId,
        visitor_type: visitorType,
    })
    .required()
    .messages({
        "any.required": `"user_properties" is a required field on the data layer object`,
    });
