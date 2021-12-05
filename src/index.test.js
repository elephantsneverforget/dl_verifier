/**
 * @jest-environment jsdom
 */
import { DLEventViewItem } from "./eventTypes/dlEventViewItem.js";
import { dl_view_item_schema_example } from "./exampleSchemaObjects/dl_view_item.js";

describe("dl_view_item shape verifier", () => {
    test("A properly formatted object should not throw any errors", () => {
        const dlEventViewItem = new DLEventViewItem(dl_view_item_schema_example);
        dlEventViewItem.verify();
        expect(dlEventViewItem.error).toBe(undefined);
        expect(dlEventViewItem.valid).toBe(true)
    });
    test("A improperly formatted object throws errors", () => {
        const dlEventViewItem = new DLEventViewItem({ecommerce: {}, event: 'lkj', event_id: 'lkj'});
        const { error, value } = dlEventViewItem.verify();
        console.log(error);
        expect(error).toBe(undefined);
        expect(value).toBe(undefined);
    });
});

