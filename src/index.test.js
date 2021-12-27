/**
 * @jest-environment jsdom
 */
import {
    DLEventViewItem,
    DLEventAddToCart,
    DLEventBeginCheckout,
    DLEventRemoveFromCart,
    DLEventSearchResults,
    DLEventViewCart,
    DLEventViewItemList,
    DLEventSelectItem,
    DLEventUserData,
    DLEventLogin,
    DLEventSignUp,
} from "./eventTypes/dlEvents.js";
import { dl_view_item_schema_example } from "./exampleSchemaObjects/dl_view_item.js";
import { dl_add_to_cart_schema_example } from "./exampleSchemaObjects/dl_add_to_cart.js";
import { dl_begin_checkout_schema_example } from "./exampleSchemaObjects/dl_begin_checkout.js";
import { dl_remove_from_cart_schema_example } from "./exampleSchemaObjects/dl_remove_from_cart.js";
import { dl_search_results_schema_example } from "./exampleSchemaObjects/dl_search_results.js";
import {dl_view_cart_schema_example } from "./exampleSchemaObjects/dl_view_cart.js"
import { dl_view_item_list_schema_example } from "./exampleSchemaObjects/dl_view_item_list.js";
import { dl_select_item_schema_example } from "./exampleSchemaObjects/dl_select_item.js";
import { dl_user_data_schema_example } from "./exampleSchemaObjects/dl_user_data.js";
import { dl_login_schema_example } from "./exampleSchemaObjects/dl_login.js";
import { dl_sign_up_schema_example } from "./exampleSchemaObjects/dl_sign_up.js";

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
});

describe("dl_begin_checkout shape verifier", () => {
    test("A properly formatted dl_begin_checkout object should not throw any errors", () => {
        const dlEventBeginCheckout = new DLEventBeginCheckout(
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

describe("dl_select_item shape verifier", () => {
    test("A properly formatted dl_select_item object should not throw any errors", () => {
        const dlEventSelectItem = new DLEventSelectItem(
            dl_select_item_schema_example
        );
        dlEventSelectItem.verify();
        expect(dlEventSelectItem.getErrors()).toHaveLength(0);
        expect(dlEventSelectItem.isValid()).toBe(true);
        expect(dlEventSelectItem.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_select_item object should throw errors", () => {
        const dlEventSelectItem = new DLEventSelectItem(
            dl_remove_from_cart_schema_example
        );
        dlEventSelectItem.verify();
        expect(dlEventSelectItem.getErrors()).toBeDefined();
        expect(dlEventSelectItem.isValid()).toBe(false);
    });
});

describe("dl_user_data shape verifier", () => {
    test("A properly formatted dl_user_data object should not throw any errors", () => {
        const dlEventUserData = new DLEventUserData(
            dl_user_data_schema_example
        );
        dlEventUserData.verify();
        expect(dlEventUserData.getErrors()).toHaveLength(0);
        expect(dlEventUserData.isValid()).toBe(true);
        expect(dlEventUserData.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_user_data object should throw errors", () => {
        const dlEventUserData = new DLEventUserData(
            dl_remove_from_cart_schema_example
        );
        dlEventUserData.verify();
        expect(dlEventUserData.getErrors()).toBeDefined();
        expect(dlEventUserData.isValid()).toBe(false);
    });
});

describe("dl_login shape verifier", () => {
    test("A properly formatted dl_login object should not throw any errors", () => {
        const dlEventLogin = new DLEventLogin(
            dl_login_schema_example
        );
        dlEventLogin.verify();
        expect(dlEventLogin.getErrors()).toHaveLength(0);
        expect(dlEventLogin.isValid()).toBe(true);
        expect(dlEventLogin.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_login object should throw errors", () => {
        const dlEventLogin = new DLEventLogin(
            dl_remove_from_cart_schema_example
        );
        dlEventLogin.verify();
        expect(dlEventLogin.getErrors()).toBeDefined();
        expect(dlEventLogin.isValid()).toBe(false);
    });
});

describe("dl_sign_up shape verifier", () => {
    test("A properly formatted dl_sign_up object should not throw any errors", () => {
        const dlEventSignUp = new DLEventSignUp(
            dl_sign_up_schema_example
        );
        dlEventSignUp.verify();
        expect(dlEventSignUp.getErrors()).toHaveLength(0);
        expect(dlEventSignUp.isValid()).toBe(true);
        expect(dlEventSignUp.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_sign_up object should throw errors", () => {
        const dlEventSignUp = new DLEventSignUp(
            dl_remove_from_cart_schema_example
        );
        dlEventSignUp.verify();
        expect(dlEventSignUp.getErrors()).toBeDefined();
        expect(dlEventSignUp.isValid()).toBe(false);
    });
});