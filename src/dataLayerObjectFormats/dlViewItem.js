import { DLEvent } from './dataLayerEvent.js'
import { products } from '../validators/products.js'
import Joi from 'joi';

export class DLViewItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
    }

    // Should return an array of messages starting with the event type we are verifying + whether it was verified or not.
    verify() {
        const dlViewItemSchema = Joi.object.keys({
            event: Joi.string.valid('dl_view_item').required(),
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
        })
        dlViewItemSchema.validate(this.dataLayerObject);
        this.logVerificationOutcome();
    }
}