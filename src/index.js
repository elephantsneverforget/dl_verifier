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

// Checks whether the dl_user_data event is already in the data layer
const eventPreceededByUserData = () => {
    return (
        window.dataLayer.filter((dlEvent) => dlEvent.event === "dl_user_data")
            .length > 0
    );
};

// Sends a copy of the db to the background script for routing to the panel
const sendUpdatedDB = () => {
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
    // console.log("Event about to be verified: " + JSON.stringify(dlEvent));
    try {
        // If the event is not dl_user_data or route change, ensure it was preced by dl_user_data
        eventPreceededByUserData(dlEvent)
            ? dlEvent.setMissingUserData(false)
            : dlEvent.setMissingUserData(true);
        dlEvent.logVerificationOutcome();
        dataLayerDB.setEventValidityProperty(
            dlEvent.getEventName(),
            dlEvent.getProperties()
        );
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
    // console.log("Reset DB called");
    dataLayerDB.clear();
    sendUpdatedDB();
});

// Send initial db to background script
sendUpdatedDB();
