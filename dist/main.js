import joi from 'joi';

class Logger {
    static logToConsole(errors, verificationSummary) {
        console.group(
            "%c" + verificationSummary,
            "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
        );
        if (errors) errors.forEach(error => console.log(error));
        console.groupEnd();
    }

    // static logToToast(message) {
        // Toastify({
        //     text: message,
        //     // duration: 5000,
        //     destination: "https://github.com/apvarun/toastify-js",
        //     newWindow: true,
        //     close: true,
        //     gravity: "top", // `top` or `bottom`
        //     position: "left", // `left`, `center` or `right`
        //     stopOnFocus: true, // Prevents dismissing of toast on hover
        //     style: {
        //         background: "linear-gradient(to right, #00b09b, #96c93d)",
        //     },
        //     onClick: function () { } // Callback after click
        // }).showToast();
    // }
}

// This file contains all schemas to check dl items against.
const products = joi
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

const eventId = joi.string().min(7).required().messages({
    "any.required": `"event_id" is a required field. It should be a UUID like value.`,
});

joi.string().min(2).required().messages({
    "any.required": `"cart_total" is a required field. It should contain the total value of the cart.`,
});

const getEventNameSchema = function (eventName) {
    return joi.string().valid(eventName).required().messages({
        "any.required": `"event" is a required field on the data layer object and should contain and event name such as dl_view_item, dl_add_to_cart etc...`,
    });
};

const ecommerce = (conts) =>
    joi
        .object()
        .keys({
            currencyCode: joi.string().min(3).max(3).required().messages({
                "any.required": `"currencyCode" is a required field on the ecommerce object and should contain a currency code such as "USD".`,
            }),
            [conts["ecommerceSubField"]]: joi
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

const stringSchema = (message) =>
    joi.string().required().messages({
        "any.required": message,
    });

const actionField = (action) =>
    joi
        .object()
        .keys({ ...action })
        .required();

joi
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

joi
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
        user_consent: joi.string().required().messages({
            "any.required": `"user_consent" is a required field on the user_properties object and should contain an empty string if not consent is present.`,
        }),
    })
    .required()
    .messages({
        "any.required": `"user_properties" is a required field on the data layer object`,
    });

class DLEvent {
    constructor(dataLayerObject) {
        this.dataLayerObject = dataLayerObject;
        this._verificationhasBeenRun = false;
        this._errors = [];
        this._verificationSummary;
        this._isValid;
    }

    verify(schemas, eventName) {
        if (this._verificationhasBeenRun === true)
            throw new Error("Can't call verify more than once on the same object.");
        const dlEventSchema = joi.object({
            event: getEventNameSchema(eventName),
            event_id: eventId,
            ...schemas,
        });

        const validation = dlEventSchema.validate(this.dataLayerObject, {
            abortEarly: false,
            allowUnknown: true
        });

        if (validation.error) {
            this._isValid = false;
            this._errors = validation.error;
            this._verificationSummary = `${eventName} event with event_id ${this.dataLayerObject.event_id} is invalid`;
        } else {
            this._isValid = true;
            this._verificationSummary = `${eventName} event with event_id: ${this.dataLayerObject.event_id} is valid.`;
        }
        this._verificationhasBeenRun = true;
        return validation;
    }

    getErrors() {
        return this._errors;
    }

    isValid() {
        return this._isValid;
    }

    getVerificationSummary() {
        return this._verificationSummary;
    }

    logVerificationOutcome() {
        // Log details in console
        // Logger.logToToast(this._verificationSummary);
        // Log toast
        Logger.logToConsole(this._errors, this._verificationSummary);
    }
}

const dl_view_item_schema_example = {
    event: "dl_view_item",
    event_id: "231f2c91-c2f3-421f-9d20-bb46a956e87a",
    ecommerce: {
        currencyCode: "USD",
        detail: {
            actionField: {
                list: "/collections/games",
                action: "detail",
            },
            products: [
                {
                    id: "CHESS-SET", // SKU
                    name: "Gold Chess Set",
                    brand: "Chess Inc.",
                    category: "Games",
                    variant: "Large Board",
                    price: "199.00",
                    list: "/collections/games",
                    product_id: "7112843886744",
                    variant_id: "41275778367640",
                    compare_at_price: "0.0",
                    image: "//cdn.shopify.com/s/files/1/0200/7616/products/arena-concrete-chess-set_f75103a8-2ecc-4d91-8d6c-d80b2501dbd7.png?v=1636459884",
                    inventory: "20",
                },
            ],
        },
    },
};

const dl_add_to_cart_schema_example = {
    event: "dl_add_to_cart",
    event_id: "887cb1e5-27ea-47c3-95a3-fdca8299e719",
    ecommerce: {
        currencyCode: "USD",
        add: {
            actionField: {
                list: "/collections/puzzles",
                action: "add",
            },
            products: [
                {
                    id: "0A-CLUE-BOX",
                    name: "Clue Puzzle",
                    brand: "iDVENTURE",
                    category: "Puzzles",
                    variant: "Clue puzzle size large",
                    price: "40",
                    quantity: "1",
                    list: "/collections/puzzles",
                    product_id: "5074792185993",
                    variant_id: "33922510782601",
                    image: "https://cdn.shopify.com/s/files/1/0200/7616/products/Cluebox-1_098a06ca-1389-46cc-b34e-ec85c86e99df.png?v=1636419558",
                },
            ],
        },
    },
};

class DLEventViewItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_view_item_schema_example;
    }

    verify() {
        return super.verify(
            ecommerceFactory("detail", {
                list: stringSchema(
                    `"list" is a required field on the actionField object and should contain the collection path to the product.`
                ),
                action: stringSchema(
                    `"action" is a required field on the actionField object and should contain the string "detail"`
                ),
            }),
            "dl_view_item"
        );
    }
}

class DLEventAddToCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_add_to_cart_schema_example;
    }

    verify() {
        super.verify(
            ecommerceFactory("add", {
                list: stringSchema(
                    `"list" is a required field on the actionField object and should contain the collection path to the product.`
                ),
                action: stringSchema(
                    `"action" is a required field on the actionField object and should contain the string "add"`
                ),
            }),
            "dl_add_to_cart"
        );
    }
}


function ecommerceFactory(subField, fields) {
    return {
        // action field builder + pass name of field that's not currency.
        ecommerce: ecommerce({
            ecommerceSubField: subField,
            actionField: {
                ...fields,
            },
        }),
    };
}

function evaluateDLEvent(dlEventObject) {
    const dlEventName = dlEventObject.event;
    const dlEventMap = {
        dl_view_item: DLEventViewItem,
        dl_add_to_cart: DLEventAddToCart,
    };
    if (typeof dlEventObject !== "object") return;
    if (dlEventName in dlEventMap) {
        const dlEvent = new dlEventMap[dlEventName](dlEventObject);
        dlEvent.verify();
        dlEvent.logVerificationOutcome();
    }
}

export { DLEventAddToCart, DLEventViewItem, evaluateDLEvent };
