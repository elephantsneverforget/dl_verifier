/**
 * @jest-environment jsdom
 */
import {
    DLEventViewItem,
    DLEventAddToCart,
    DLBeginCheckout,
} from "./eventTypes/dlEventViewItem.js";
import { dl_view_item_schema_example } from "./exampleSchemaObjects/dl_view_item.js";
import { dl_add_to_cart_schema_example } from "./exampleSchemaObjects/dl_add_to_cart.js";
import { dl_begin_checkout_schema_example } from "./exampleSchemaObjects/dl_begin_checkout.js";

describe("dl_view_item shape verifier", () => {
    test("A properly formatted dl_view_item object should not throw any errors", () => {
        const dlEventViewItem = new DLEventViewItem(
            dl_view_item_schema_example
        );
        dlEventViewItem.verify();
        expect(dlEventViewItem.verify).toThrow(Error);
        expect(dlEventViewItem.getErrors()).toHaveLength(0);
        expect(dlEventViewItem.isValid()).toBe(true);
        expect(dlEventViewItem.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted object throws errors", () => {
        const dlEventViewItem = new DLEventViewItem({});
        dlEventViewItem.verify();
        expect(dlEventViewItem.getErrors()).toBeDefined();
        expect(dlEventViewItem.isValid()).toBe(false);
        expect(dlEventViewItem.getVerificationSummary()).toContain("invalid");
    });
});

describe("dl_add_to_cart shape verifier", () => {
    test("A properly formatted dl_add_to_cart object should not throw any errors", () => {
        const dlEventAddToCart = new DLEventAddToCart(
            dl_add_to_cart_schema_example
        );
        dlEventAddToCart.verify();
        expect(dlEventAddToCart.getErrors()).toHaveLength(0);
        expect(dlEventAddToCart.isValid()).toBe(true);
        expect(dlEventAddToCart.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_add_to_cart throws an error.", () => {
        const dlEventAddToCart = new DLEventAddToCart({
            event: "dl_add_to_cart",
            event_id: "lkjasdlkfjaskf",
            ecommerce: {
                currencyCode: "USD",
                detail: { // incorrect object shape throws an error
                    actionField: {
                        list: "/collections/puzzles",
                        action: "add",
                    },
                },
            },
        });
        dlEventAddToCart.verify();
        console.log(dlEventAddToCart.getErrors());
        expect(dlEventAddToCart.getErrors()).toBeDefined();
        expect(dlEventAddToCart.isValid()).toBe(false);
        expect(dlEventAddToCart.getVerificationSummary()).toContain("invalid");
    });
});

describe("dl_begin_checkout shape verifier", () => {
    test("A properly formatted dl_begin_checkout object should not throw any errors", () => {
        const dlEventBeginCheckout = new DLBeginCheckout(
            dl_begin_checkout_schema_example
        );
        dlEventBeginCheckout.verify();
        expect(dlEventBeginCheckout.verify).toThrow(Error);
        expect(dlEventBeginCheckout.getErrors()).toHaveLength(0);
        expect(dlEventBeginCheckout.isValid()).toBe(true);
        expect(dlEventBeginCheckout.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted object throws errors", () => {
        const dlEventViewItem = new DLEventViewItem({});
        dlEventViewItem.verify();
        expect(dlEventViewItem.getErrors()).toBeDefined();
        expect(dlEventViewItem.isValid()).toBe(false);
        expect(dlEventViewItem.getVerificationSummary()).toContain("invalid");
    });
});