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

dataLayerDB;
if (typeof dataLayerDB === "undefined") {
    var dataLayerDB = new DB();
}

// Sends a copy of the db to the background script for routing to the panel
const sendUpdatedDB = () => {
    console.log("sendUpdate" + JSON.stringify(dataLayerDB.getDB()));
    window.dispatchEvent(
        new CustomEvent("__elever_injected_script_message", {
            detail: { db: dataLayerDB.getDB() },
        })
    );
};

// Evaluate each event relevant event that's pushed to the DL
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
        console.log("Sending updated DB after new event");
        sendUpdatedDB();
    } catch (e) {
        console.log(e);
    }
};

// Listen for DL updates and push for evaluation
let lastIndexProcessed = 0;
window.dataLayer = window.dataLayer || [];
setInterval(function () {
    for (; lastIndexProcessed < window.dataLayer.length; lastIndexProcessed++) {
        evaluateDLEvent(window.dataLayer[lastIndexProcessed]);
    }
}, 1000);

// Listen for db reset event from panael.js
window.addEventListener("__elever_reset_db", async function () {
    console.log("Reset DB called");
    dataLayerDB.clear();
    sendUpdatedDB();
});

// Send initial db to background script
console.log("Sending updated DB from main script")
sendUpdatedDB();
