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
} from "./eventTypes/dlEvents.js";

import { DB } from "./db";

const dlEventMap = {
    dl_add_to_cart: DLEventAddToCart,
    dl_begin_checkout: DLEventBeginCheckout,
    dl_login: DLEventLogin,
    dl_remove_from_cart: DLEventRemoveFromCart,
    dl_search_results: DLEventSearchResults,
    dl_select_item: DLEventSelectItem,
    dl_sign_up: DLEventSignUp,
    dl_user_data: DLEventUserData,
    dl_view_cart: DLEventViewCart,
    dl_view_item_list: DLEventViewItemList,
    dl_view_item: DLEventViewItem,
};

let db = new DB();
function evaluateDLEvent(dlEventObject) {
    const dlEventName = dlEventObject.event;
    if (typeof dlEventObject !== "object" || !(dlEventName in dlEventMap))
        return null;
    const dlEvent = new dlEventMap[dlEventName](dlEventObject);
    dlEvent.verify();
    dlEvent.logVerificationOutcome();

    try {
        db.setProperty(dlEvent.getEventName(), dlEvent.isValid() ? 1 : 0);
        console.log(db.getDB());
        console.log("Sent message from index.js");
        window.dispatchEvent(new CustomEvent("__elever_injected_script_message", {
                detail: { db: db.getDB() },
            })
        );
    } catch (e) {
        console.log(e);
    }
}

let lastIndexProcessed = 0;
window.dataLayer = window.dataLayer || [];
setInterval(function () {
    for (; lastIndexProcessed < window.dataLayer.length; lastIndexProcessed++) {
        evaluateDLEvent(window.dataLayer[lastIndexProcessed]);
    }
}, 1000);
