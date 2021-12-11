/**
 * @jest-environment jsdom
 */
import { DLEventViewItem } from "./eventTypes/dlEventViewItem.js";
import { dl_view_item_schema_example } from "./exampleSchemaObjects/dl_view_item.js";

describe("dl_view_item shape verifier", () => {
    test("A properly formatted object should not throw any errors", () => {
        const dlEventViewItem = new DLEventViewItem(dl_view_item_schema_example);
        dlEventViewItem.verify();
        expect(dlEventViewItem.getErrors()).toHaveLength(0);
        expect(dlEventViewItem.isValid()).toBe(true);
        expect(dlEventViewItem.getVerificationSummary()).toContain('valid');
    });
});

describe("dl_view_item invalid creates errors", () => {
    test("A improperly formatted object throws errors", () => {
        const dlEventViewItem = new DLEventViewItem({});
        dlEventViewItem.verify();
        console.log(dlEventViewItem.getErrors());
        expect(dlEventViewItem.getErrors()).toBeDefined();
        console.log(dlEventViewItem.getErrors());
        expect(dlEventViewItem.isValid()).toBe(false);
        expect(dlEventViewItem.getVerificationSummary()).toContain('invalid');
    });
});