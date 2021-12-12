import { DLEvent } from "./dlEvent.js";
import { ecommerce } from "../schemas.js";
import { dl_view_item_schema_example } from "../exampleSchemaObjects/dl_view_item.js";
import { dl_add_to_cart_schema_example } from "../exampleSchemaObjects/dl_add_to_cart.js";

export class DLEventViewItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_view_item_schema_example
    }

    // Add anything additional to 'event_id' and 'event' that requires verification.
    verify() {
        return super.verify(
            {
                ecommerce: ecommerce('detail', 'detail'),
            },
            "dl_view_item"
        );
    }
}

export class DLEventAddToCart extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
        this.schemaExample = dl_add_to_cart_schema_example;
    }

    // Add anything additional to 'event_id' and 'event' that requires verification.
    verify() {
        return super.verify(
            {
                ecommerce: ecommerce('add', 'add'),
            },
            "dl_add_to_cart"
        );
    }
}