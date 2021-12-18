/**
 * @jest-environment jsdom
 */
import {
    DLEventViewItem,
    DLEventAddToCart,
    DLBeginCheckout,
    DLEventRemoveFromCart,
    DLEventSearchResults,
    DLEventViewCart,
    DLEventViewItemList,
} from "./eventTypes/dlEventViewItem.js";
import { dl_view_item_schema_example } from "./exampleSchemaObjects/dl_view_item.js";
import { dl_add_to_cart_schema_example } from "./exampleSchemaObjects/dl_add_to_cart.js";
import { dl_begin_checkout_schema_example } from "./exampleSchemaObjects/dl_begin_checkout.js";
import { dl_remove_from_cart_schema_example } from "./exampleSchemaObjects/dl_remove_from_cart.js";
import { dl_search_results_schema_example } from "./exampleSchemaObjects/dl_search_results.js";
import {dl_view_cart_schema_example } from "./exampleSchemaObjects/dl_view_cart.js"
import { dl_view_item_list_schema_example } from "./exampleSchemaObjects/dl_view_item_list.js";

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
});

describe("dl_view_item invalid creates errors", () => {
    test("A improperly formatted object throws errors", () => {
        const dlEventViewItem = new DLEventViewItem({});
        dlEventViewItem.verify();
        console.log(dlEventViewItem.getErrors());
        expect(dlEventViewItem.getErrors()).toBeDefined();
        console.log(dlEventViewItem.getErrors());
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
        expect(dlEventBeginCheckout.getVerificationSummary()).toContain(
            "valid"
        );
    });
});

describe("dl_remove_from_cart shape verifier", () => {
    test("A properly formatted dl_remove_from_cart object should not throw any errors", () => {
        const dlEventRemoveFromCart = new DLEventRemoveFromCart(
            dl_remove_from_cart_schema_example
        );
        dlEventRemoveFromCart.verify();
        expect(dlEventRemoveFromCart.verify).toThrow(Error);
        expect(dlEventRemoveFromCart.getErrors()).toHaveLength(0);
        expect(dlEventRemoveFromCart.isValid()).toBe(true);
        expect(dlEventRemoveFromCart.getVerificationSummary()).toContain(
            "valid"
        );
    });
});

describe("dl_remove_from_cart shape verifier", () => {
    test("A properly formatted dl_remove_from_cart object should not throw any errors", () => {
        const dlEventRemoveFromCart = new DLEventRemoveFromCart(
            dl_remove_from_cart_schema_example
        );
        dlEventRemoveFromCart.verify();
        expect(dlEventRemoveFromCart.verify).toThrow(Error);
        expect(dlEventRemoveFromCart.getErrors()).toHaveLength(0);
        expect(dlEventRemoveFromCart.isValid()).toBe(true);
        expect(dlEventRemoveFromCart.getVerificationSummary()).toContain(
            "valid"
        );
    });
});

describe("dl_search_results shape verifier", () => {
    test("A properly formatted dl_search_results object should not throw any errors", () => {
        const dlEventSearchResults = new DLEventSearchResults(
            dl_search_results_schema_example
        );
        dlEventSearchResults.verify();
        expect(dlEventSearchResults.getErrors()).toHaveLength(0);
        expect(dlEventSearchResults.isValid()).toBe(true);
        expect(dlEventSearchResults.getVerificationSummary()).toContain(
            "valid"
        );
    });
    test("A improperly formatted dl_search_results should throw errors", () => {
        const dlEventSearchResults = new DLEventSearchResults(
            dl_remove_from_cart_schema_example
        );
        dlEventSearchResults.verify();
        expect(dlEventSearchResults.getErrors()).toBeDefined();
        expect(dlEventSearchResults.isValid()).toBe(false);
    });
});

describe("dl_view_cart shape verifier", () => {
    test("A properly formatted dl_view_cart object should not throw any errors", () => {
        const dlEventViewCart = new DLEventViewCart(
            dl_view_cart_schema_example
        );
        dlEventViewCart.verify();
        expect(dlEventViewCart.getErrors()).toHaveLength(0);
        expect(dlEventViewCart.isValid()).toBe(true);
        expect(dlEventViewCart.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_view_cart object should throw errors", () => {
        const dlEventViewCart = new DLEventViewCart(
            dl_remove_from_cart_schema_example
        );
        dlEventViewCart.verify();
        expect(dlEventViewCart.getErrors()).toBeDefined();
        expect(dlEventViewCart.isValid()).toBe(false);
    });
});

describe("dl_view_item_list shape verifier", () => {
    test("A properly formatted dl_view_item_list object should not throw any errors", () => {
        const dlEventViewItemList = new DLEventViewItemList(
            dl_view_item_list_schema_example
        );
        dlEventViewItemList.verify();
        expect(dlEventViewItemList.getErrors()).toHaveLength(0);
        expect(dlEventViewItemList.isValid()).toBe(true);
        expect(dlEventViewItemList.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_view_item_list object should throw errors", () => {
        const dlEventViewItemList = new DLEventViewCart(
            dl_remove_from_cart_schema_example
        );
        dlEventViewItemList.verify();
        expect(dlEventViewItemList.getErrors()).toBeDefined();
        expect(dlEventViewItemList.isValid()).toBe(false);
    });
});