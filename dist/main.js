import Joi from 'joi';

class DLEvent {
    constructor(dataLayerObject) {
        this.dataLayerObject = dataLayerObject;
    }

    logVerificationOutcome(messages) {
        // Log details in console
        Logger.logToToast(message[0]);
        // Log toast
        Logger.logToConsole(messages);
    }
}

const products = Joi.array().items(
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

try {
    const {error} = products.validate([{
        name: 'h'
    }], { abortEarly: false });
    console.log(error.details);
    // console.log(products.validate([{
    //     name: 'h'
    // }], { abortEarly: false }),
    // );
} catch (e) {
    console.log(e.error);
    // console.log(e);
}

class DLViewItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
    }

    // Should return an array of messages starting with the event type we are verifying + whether it was verified or not.
    verify() {
        const dlViewItemSchema = Joi.object({
            event: Joi.string('dl_view_item'),
            event_id: Joi.alphanum().min(5),
            ecommerce: Joi.object({
                currencyCode: Joi.string(3),
                detail: Joi.object({
                    actionField: Joi.object({
                        list: Joi.string()
                    }),
                    products: products,
                })
            })
        });
        dlViewItemSchema.validate(this.dataLayerObject);
        this.logVerificationOutcome();
    }
}

// evaluateDLEvent("id");

const dlViewItem = new DLViewItem({ event: "dl_view_item", id: "3qwr" });
console.log(dlViewItem.verify());
// evaluateDLEvent({{dlv - DL Verifier - GTM unique event ID}});
