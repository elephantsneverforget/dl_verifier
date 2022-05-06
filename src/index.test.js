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
    DLEventRouteChange,
    DLEvent,
} from "./eventTypes/dlEvents.js";
import { dl_view_item_schema_example } from "./exampleSchemaObjects/dl_view_item.js";
import { dl_add_to_cart_schema_example } from "./exampleSchemaObjects/dl_add_to_cart.js";
import { dl_begin_checkout_schema_example } from "./exampleSchemaObjects/dl_begin_checkout.js";
import { dl_remove_from_cart_schema_example } from "./exampleSchemaObjects/dl_remove_from_cart.js";
import { dl_search_results_schema_example } from "./exampleSchemaObjects/dl_search_results.js";
import { dl_view_cart_schema_example } from "./exampleSchemaObjects/dl_view_cart.js";
import { dl_view_item_list_schema_example } from "./exampleSchemaObjects/dl_view_item_list.js";
import { dl_select_item_schema_example } from "./exampleSchemaObjects/dl_select_item.js";
import { dl_user_data_schema_example } from "./exampleSchemaObjects/dl_user_data.js";
import { dl_login_schema_example } from "./exampleSchemaObjects/dl_login.js";
import { dl_sign_up_schema_example } from "./exampleSchemaObjects/dl_sign_up.js";
import { dl_route_change_schema_example } from "./exampleSchemaObjects/dl_route_change.js";

describe("Events preceded or not preceded by dl_user_data events have correct properties set", () => {
    test("An event having dl_user_data precede it in the data layer is not set to missing user data", () => {
        const dlEventViewItem = new DLEventViewItem(
            dl_view_item_schema_example,
            [{ event: "dl_user_data" }, { event: "dl_view_item" }]
        );
        expect(dlEventViewItem.isMissingUserData()).toBe(false);
        expect(dlEventViewItem.isValid()).toBe(true);
    });
    test("An event not having dl_user_data precede it in the data layer is set to missing user data", () => {
        const dlEventViewItem = new DLEventViewItem(
            dl_view_item_schema_example,
            [{ event: "dl_view_item" }]
        );
        expect(dlEventViewItem.isMissingUserData()).toBe(true);
        expect(dlEventViewItem.isValid()).toBe(true);
    });
    test("An event not requiring dl_user_data to precede it does not have missing user data set to true", () => {
        const dlEventLogin = new DLEventLogin(dl_login_schema_example, [
            { event: "dl_user_data" },
        ]);
        expect(dlEventLogin.isMissingUserData()).toBe(false);
        expect(dlEventLogin.isValid()).toBe(true);
    });
    test("If an event requiring to be preceded by dl_user_data preceded dl_user_data then missing user data is set to true", () => {
        const dlEventViewItem = new DLEventViewItem(
            dl_view_item_schema_example,
            [
                { event: "dl_view_item" },
                { event: "dl_sign_up" },
                { event: "dl_user_data" },
            ]
        );
        expect(dlEventViewItem.isMissingUserData()).toBe(true);
        expect(dlEventViewItem.isValid()).toBe(true);
    });
});

describe("Test whether dynamic GA4 cookie is present and test for correct value added to marketing cookie.", () => {
    test("When passed a string with a GA4 cookie value the correct cookie key is retrieved", () => {
        const cookieValue = DLEvent.getGA4Cookie(
            "_gid=GA1.2.280273853.1651332781; lsContextID=sBQBJ0D8PE2xC2HBn7kcog; _clck=1qf7nvo|1|f12|0; shopify_pay_redirect=pending; fsb_previous_pathname=/; _ga_J5PDW7F86W=GS1.1.1651332780.10.1.1651332796.44; _ga=GA1.2.1694597000.1650891257; lsSema-=1651332796889"
        );
        expect(cookieValue).toBe("_ga_J5PDW7F86W");
    });
    test("When passed a string without a GA4 cookie value the cookie key should be set to null", () => {
        const cookieValue = DLEvent.getGA4Cookie(
            "_gid=GA1.2.280273853.1651332781; lsContextID=sBQBJ0D8PE2xC2HBn7kcog; _clck=1qf7nvo|1|f12|0; shopify_pay_redirect=pending; fsb_previous_pathname=/; _ga=GA1.2.1694597000.1650891257; lsSema-=1651332796889"
        );
        expect(cookieValue).toBe(null);
    });
    test("If an event has a GA4 cookie, and it's added to the marketing object correctly, the event should be marked as valid", () => {
        const dlEventViewItem = new DLEventViewItem(
            {
                ...dl_view_item_schema_example,
                // override the base marketing object with a marketing object that has the relevant cookies
                marketing: {
                    _ga: "GA1.2.1694597000.1650891257",
                    _gid: "GA1.2.280273853.1651332781",
                    user_id: "5b8f8f8f-8f8f-8f8f-8f8f-8f8f8f8f8f8f",
                    _ga_J5PDW7F86W: "GS1.1.1651332780.10.1.1651332796.44"
                },
            },
            [{ event: "dl_user_data" }, { event: "dl_view_item" }],
            "_gid=GA1.2.280273853.1651332781; lsContextID=sBQBJ0D8PE2xC2HBn7kcog; _clck=1qf7nvo|1|f12|0; shopify_pay_redirect=pending; fsb_previous_pathname=/; _ga_J5PDW7F86W=GS1.1.1651332780.10.1.1651332796.44; _ga=GA1.2.1694597000.1650891257; lsSema-=1651332796889"
        );
        expect(dlEventViewItem._cookies["_ga"]).toBe(
            "GA1.2.1694597000.1650891257"
        );
        expect(dlEventViewItem._cookies["_gid"]).toBe(
            "GA1.2.280273853.1651332781"
        ); 
        expect(dlEventViewItem._cookies["_ga_J5PDW7F86W"]).toBe(
            "GS1.1.1651332780.10.1.1651332796.44"
        );  
        expect(dlEventViewItem.isValid()).toBe(true);
    });
});

describe("If cookies present in browser relevant to Elevar DL, make required in marketing object", () => {
    test("If an event has relevant cookies associated, and they are passed correctly in the marketing object the event should be marked as valid", () => {
        const dlEventViewItem = new DLEventViewItem(
            {
                ...dl_view_item_schema_example,
                // override the base marketing object with a marketing object that has the relevant cookies
                marketing: {
                    _ga: "GA1.2.162823682.1647884841",
                    _gid: "GA1.2.1425705106.1651249579",
                    user_id: "5b8f8f8f-8f8f-8f8f-8f8f-8f8f8f8f8f8f",
                },
            },
            [{ event: "dl_user_data" }, { event: "dl_view_item" }],
            "_ga=GA1.2.162823682.1647884841; _gid=GA1.2.1425705106.1651249579"
        );
        expect(dlEventViewItem._cookies["_ga"]).toBe(
            "GA1.2.162823682.1647884841"
        );
        expect(dlEventViewItem._cookies["_gid"]).toBe(
            "GA1.2.1425705106.1651249579"
        );
        expect(dlEventViewItem._cookies["_fbp"]).toBeUndefined();
        expect(dlEventViewItem.isValid()).toBe(true);
    });
    test("If an event has relevant cookies associated, but the values passed to the marketing obect are incorrect the event should be marked as valid", () => {
        const dlEventViewItem = new DLEventViewItem(
            {
                ...dl_view_item_schema_example,
                // override the base marketing object with a marketing object that has the relevant cookies
                marketing: {
                    _gid: "GA1.2.1425705106.1651249579",
                    _ga: "Nottherightvalue",
                    user_id: "5b8f8f8f-8f8f-8f8f-8f8f-8f8f8f8f8f8f",
                },
            },
            [{ event: "dl_user_data" }, { event: "dl_view_item" }],
            "_ga=GA1.2.162823682.1647884841; _gid=GA1.2.1425705106.1651249579"
        );
        expect(dlEventViewItem._cookies["_ga"]).toBe(
            "GA1.2.162823682.1647884841"
        );
        expect(dlEventViewItem._cookies["_gid"]).toBe(
            "GA1.2.1425705106.1651249579"
        );
        expect(dlEventViewItem._cookies["_fbp"]).toBeUndefined();
        expect(dlEventViewItem.isValid()).toBe(false);
    });
    test("If no cookie values are passed the marketing object only requires user_id", () => {
        const dlEventViewItem = new DLEventViewItem(
            dl_view_item_schema_example,
            [{ event: "dl_user_data" }, { event: "dl_view_item" }],
            ""
        );
        expect(dlEventViewItem.isValid()).toBe(true);
    });
});

describe("Event received has a recognizable event name and should be processed", () => {
    test("An event with a recognizable event name is marked as should be processed", () => {
        expect(DLEvent.shouldProcessEvent(dl_view_item_schema_example)).toBe(
            true
        );
    });
    test("An event without a recognizable event name is marked as should be processed", () => {
        expect(
            DLEvent.shouldProcessEvent(
                { event: "dl_not_standard_event" },
                { event: "dl_view_item" }
            )
        ).toBe(false);
    });
});

describe("Event factory builds appropriate event", () => {
    test("A dl_view_item event is created when factory is passed dl_view_item event", () => {
        // expect(DLEvent.dlEventFactory("dl_view_item")).toBe(DLEventViewItem);
        const dlEventViewItem = DLEvent.dlEventFactory(
            dl_view_item_schema_example,
            [{ event: "dl_user_data" }, { event: "dl_view_item" }]
        );
        expect(dlEventViewItem.isValid()).toBe(true);
        expect(dlEventViewItem.getEventName()).toBe("dl_view_item");
    });
});

describe("dl_view_item shape verifier", () => {
    test("A properly formatted dl_view_item object should not throw any errors", () => {
        const dlEventViewItem = new DLEventViewItem(
            dl_view_item_schema_example
        );
        // dlEventViewItem.verify();
        expect(dlEventViewItem.verify).toThrow(Error);
        expect(dlEventViewItem.getErrors()).toHaveLength(0);
        expect(dlEventViewItem.isValid()).toBe(true);
        expect(dlEventViewItem.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted object throws errors", () => {
        const dlEventViewItem = new DLEventAddToCart({});
        // dlEventViewItem.verify();
        expect(dlEventViewItem.getErrors()).toBeDefined();
        expect(dlEventViewItem.isValid()).toBe(false);
        expect(dlEventViewItem.getVerificationSummary()).toContain("invalid");
    });
    test("A dl_view_item missing actionField.action throws an error", () => {
        delete dl_view_item_schema_example.ecommerce.detail.actionField.action;
        const dlEventViewItem = new DLEventViewItem(
            dl_view_item_schema_example
        );
        // dlEventViewItem.verify();
        expect(dlEventViewItem.isValid()).toBe(false);
        expect(dlEventViewItem.getVerificationSummary()).toContain("invalid");
        expect(dlEventViewItem.getErrors()[0].message).toContain("action");
    });
    test("An event requiring user data is not set to missing user data", () => {
        const dlEventViewItem = new DLEventAddToCart({});
        dlEventViewItem.setShouldBePrecededByDLUserData([
            { event: "dl_user_data" },
            { event: "dl_add_to_cart" },
        ]);
        // dlEventViewItem.verify();
        expect(dlEventViewItem.isMissingUserData()).toBe(false);
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
        // dlEventAddToCart.verify();
        expect(dlEventAddToCart.getErrors()).toHaveLength(0);
        expect(dlEventAddToCart.isValid()).toBe(true);
        expect(dlEventAddToCart.getVerificationSummary()).toContain("valid");
    });
    test("An add to cart without action field throws an error", () => {
        const addToCartMissingListAction = JSON.parse(
            JSON.stringify(dl_add_to_cart_schema_example)
        );
        delete addToCartMissingListAction.ecommerce.add.actionField.action;
        const dlEventAddToCartMalformed = new DLEventAddToCart(
            addToCartMissingListAction
        );
        // dlEventAddToCartMalformed.verify();
        expect(dlEventAddToCartMalformed.getErrors()).toBeDefined();
        expect(dlEventAddToCartMalformed.isValid()).toBe(false);
        expect(dlEventAddToCartMalformed.getVerificationSummary()).toContain(
            "invalid"
        );
    });
    test("An add to cart with no products array throws an error", () => {
        const addToCartMissingProducts = JSON.parse(
            JSON.stringify(dl_add_to_cart_schema_example)
        );
        delete addToCartMissingProducts.ecommerce.add.products;
        // addToCartMissingProducts.ecommerce.add.products = [];
        const dlEventAddToCartMalformed = new DLEventAddToCart(
            addToCartMissingProducts
        );
        // dlEventAddToCartMalformed.verify();
        expect(dlEventAddToCartMalformed.getErrors()).toBeDefined();
        expect(dlEventAddToCartMalformed.getErrors()[0].message).toContain(
            'You must have at least one product in the "products" array.'
        );
        expect(dlEventAddToCartMalformed.isValid()).toBe(false);
        // console.log(dlEventAddToCartMalformed.getErrors())
        expect(dlEventAddToCartMalformed.getVerificationSummary()).toContain(
            "invalid"
        );
    });
});

describe("dl_begin_checkout shape verifier", () => {
    test("A properly formatted dl_begin_checkout object should not throw any errors", () => {
        const dlEventBeginCheckout = new DLEventBeginCheckout(
            dl_begin_checkout_schema_example
        );
        // dlEventBeginCheckout.verify();
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
        // dlEventRemoveFromCart.verify();
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
        // dlEventRemoveFromCart.verify();
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
        expect(dlEventSearchResults.getErrors()).toBeDefined();
        expect(dlEventSearchResults.isValid()).toBe(false);
    });
});

describe("dl_view_cart shape verifier", () => {
    test("A properly formatted dl_view_cart object should not throw any errors", () => {
        const dlEventViewCart = new DLEventViewCart(
            dl_view_cart_schema_example
        );
        expect(dlEventViewCart.getErrors()).toHaveLength(0);
        expect(dlEventViewCart.isValid()).toBe(true);
        expect(dlEventViewCart.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_view_cart object should throw errors", () => {
        const dlEventViewCart = new DLEventViewCart(
            dl_remove_from_cart_schema_example
        );
        expect(dlEventViewCart.getErrors()).toBeDefined();
        expect(dlEventViewCart.isValid()).toBe(false);
    });
});

describe("dl_view_item_list shape verifier", () => {
    test("A properly formatted dl_view_item_list object should not throw any errors", () => {
        const dlEventViewItemList = new DLEventViewItemList(
            dl_view_item_list_schema_example
        );
        expect(dlEventViewItemList.getErrors()).toHaveLength(0);
        expect(dlEventViewItemList.isValid()).toBe(true);
        expect(dlEventViewItemList.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_view_item_list object should throw errors", () => {
        const dlEventViewItemList = new DLEventViewCart(
            dl_remove_from_cart_schema_example
        );
        expect(dlEventViewItemList.getErrors()).toBeDefined();
        expect(dlEventViewItemList.isValid()).toBe(false);
    });
});

describe("dl_select_item shape verifier", () => {
    test("A properly formatted dl_select_item object should not throw any errors", () => {
        const dlEventSelectItem = new DLEventSelectItem(
            dl_select_item_schema_example
        );
        expect(dlEventSelectItem.getErrors()).toHaveLength(0);
        expect(dlEventSelectItem.isValid()).toBe(true);
        expect(dlEventSelectItem.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_select_item object should throw errors", () => {
        const dlEventSelectItem = new DLEventSelectItem(
            dl_remove_from_cart_schema_example
        );
        expect(dlEventSelectItem.getErrors()).toBeDefined();
        expect(dlEventSelectItem.isValid()).toBe(false);
    });
});

describe("dl_user_data shape verifier", () => {
    test("A properly formatted dl_user_data object should not throw any errors", () => {
        const dlEventUserData = new DLEventUserData({
            ...dl_user_data_schema_example,
            cart_total: "100",
            });
        expect(dlEventUserData.getErrors()).toHaveLength(0);
        expect(dlEventUserData.isValid()).toBe(true);
        expect(dlEventUserData.getVerificationSummary()).toContain("valid");
    });
    test("dl_user_data requires the user_properties field and should throw an error if not present", () => {
        const dlEventUserData = new DLEventUserData({
            ...dl_user_data_schema_example,
            user_properties: {},
        });
        expect(dlEventUserData.isValid()).toBe(false);
    });
    test("dl_user_data requires the cart_total property and should throw and error if not present", () => {
        const dlEventUserData = new DLEventUserData({
            ...dl_user_data_schema_example,
        });
        expect(dlEventUserData.isValid()).toBe(false);
        expect(dlEventUserData.getErrors()[0].message).toContain("cart_total");
        expect(dlEventUserData.getErrors()).toHaveLength(1);
    });
    test("A improperly formatted dl_user_data object should throw errors", () => {
        const dlEventUserData = new DLEventUserData(
            dl_remove_from_cart_schema_example
        );
        expect(dlEventUserData.getErrors()).toBeDefined();
        expect(dlEventUserData.isValid()).toBe(false);
    });
});

describe("dl_login shape verifier", () => {
    test("A properly formatted dl_login object should not throw any errors", () => {
        const dlEventLogin = new DLEventLogin(dl_login_schema_example);
        expect(dlEventLogin.getErrors()).toHaveLength(0);
        expect(dlEventLogin.isValid()).toBe(true);
        expect(dlEventLogin.getVerificationSummary()).toContain("valid");
    });
    test("dl_login requires the user_properties field and should throw an error if not present", () => {
        const dlEventLogin = new DLEventLogin({
            ...dl_login_schema_example,
            user_properties: {},
        });
        expect(dlEventLogin.isValid()).toBe(false);
    });
    test("A improperly formatted dl_login object should throw errors", () => {
        const dlEventLogin = new DLEventLogin(
            dl_remove_from_cart_schema_example
        );
        expect(dlEventLogin.getErrors()).toBeDefined();
        expect(dlEventLogin.isValid()).toBe(false);
    });
});

describe("dl_sign_up shape verifier", () => {
    test("A properly formatted dl_sign_up object should not throw any errors", () => {
        const dlEventSignUp = new DLEventSignUp(dl_sign_up_schema_example);
        expect(dlEventSignUp.getErrors()).toHaveLength(0);
        expect(dlEventSignUp.isValid()).toBe(true);
        expect(dlEventSignUp.getVerificationSummary()).toContain("valid");
    });
    test("dl_sign_up requires the user_properties field and should throw an error if not present", () => {
        const dlEventSignUp = new DLEventSignUp({
            ...dl_sign_up_schema_example,
            user_properties: {},
        });
        expect(dlEventSignUp.isValid()).toBe(false);
    });
    test("A improperly formatted dl_sign_up object should throw errors", () => {
        const dlEventSignUp = new DLEventSignUp(
            dl_remove_from_cart_schema_example
        );
        expect(dlEventSignUp.getErrors()).toBeDefined();
        expect(dlEventSignUp.isValid()).toBe(false);
    });
});

describe("Verify user_properties verificaton adjusts for logged in and not logged in users", () => {
    test("If a user is logged in some personal userIsLoggedIn should be true", () => {
        const dlEventSignUp = new DLEventSignUp(dl_sign_up_schema_example);
        expect(dlEventSignUp.userIsLoggedIn()).toBe(true);
    });
    test("If a user isn't logged in some personal userIsLoggedIn should be false", () => {
        const dlEventViewItem = new DLEventSignUp(dl_view_cart_schema_example);
        expect(dlEventViewItem.userIsLoggedIn()).toBe(false);
    });
});

describe("dl_route_change shape verifier", () => {
    test("A properly formatted dl_route_change object should not throw any errors", () => {
        const dlEventRouteChange = new DLEventRouteChange(
            dl_route_change_schema_example
        );
        expect(dlEventRouteChange.getErrors()).toHaveLength(0);
        expect(dlEventRouteChange.isValid()).toBe(true);
        expect(dlEventRouteChange.getVerificationSummary()).toContain("valid");
    });
    test("A improperly formatted dl_route_change object should throw errors", () => {
        const dlEventRouteChange = new DLEventRouteChange(
            dl_remove_from_cart_schema_example
        );
        expect(dlEventRouteChange.getErrors()).toBeDefined();
        expect(dlEventRouteChange.isValid()).toBe(false);
    });
});
