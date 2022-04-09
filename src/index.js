import {
    DLEventViewItem,
    DLEventAddToCart,
    DLEventLogin,
    DLEventBeginCheckout,
    DLEventRemoveFromCart,
    DLEventSearchResults,
    DLEventSelectItem,
    DLEventUserData,
    DLEventViewCart,
    DLEventViewItemList,
    DLEventSignUp,
    DLEventRouteChange,
} from "./eventTypes/dlEvents.js";

import { DB } from "./db";

const dlEventMap = {
    dl_view_item: DLEventViewItem,
    dl_add_to_cart: DLEventAddToCart,
    dl_remove_from_cart: DLEventRemoveFromCart,
    dl_select_item: DLEventSelectItem,
    dl_user_data: DLEventUserData,
    dl_view_cart: DLEventViewCart,
    dl_view_item_list: DLEventViewItemList,
    dl_route_change: DLEventRouteChange,
    dl_begin_checkout: DLEventBeginCheckout,
    dl_login: DLEventLogin,
    dl_sign_up: DLEventSignUp,
    dl_search_results: DLEventSearchResults,
};

if (typeof dataLayerDB === "undefined") {
    var dataLayerDB = new DB();
}

// Send DB to background script on initial load
window.dispatchEvent(
    new CustomEvent("__elever_injected_script_message", {
        detail: { db: dataLayerDB.getDB() },
    })
);

const evaluateDLEvent = (dlEventObject) => {
    const dlEventName = dlEventObject.event;
    if (typeof dlEventObject !== "object" || !(dlEventName in dlEventMap))
        return;
    const dlEvent = new dlEventMap[dlEventName](dlEventObject);
    dlEvent.verify();
    dlEvent.logVerificationOutcome();

    try {
        dataLayerDB.setEventValidityProperty(
            dlEvent.getEventName(),
            dlEvent.isValid() ? 1 : 0
        );
        window.dispatchEvent(
            new CustomEvent("__elever_injected_script_message", {
                detail: { db: dataLayerDB.getDB() },
            })
        );
        console.log("Sent event from index.js");
    } catch (e) {
        console.log(e);
    }
};

// Clear events DB to not seen
const resetDB = () => {
    dataLayerDB.clear();
    window.dispatchEvent(
        new CustomEvent("__elever_injected_script_message", {
            detail: { db: dataLayerDB.getDB() },
        })
    );
};

// Listen for DL updates and push for evaluation
let lastIndexProcessed = 0;
window.dataLayer = window.dataLayer || [];
setInterval(function () {
    for (; lastIndexProcessed < window.dataLayer.length; lastIndexProcessed++) {
        evaluateDLEvent(window.dataLayer[lastIndexProcessed]);
    }
}, 1000);

// Listen for db reset event
window.addEventListener("__elever_reset_db", async function () {
    resetDB();
});
