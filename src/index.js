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

import { DB } from "./db"

function evaluateDLEvent(dlEventObject) {
    const dlEventName = dlEventObject.event;
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
    if (typeof dlEventObject !== "object" || !(dlEventName in dlEventMap))
        return null;
    const dlEvent = new dlEventMap[dlEventName](dlEventObject);
    dlEvent.verify();
    dlEvent.logVerificationOutcome();
    return dlEvent;
}

let db = new DB();
let lastIndexProcessed = 0;
window.dataLayer = window.dataLayer || [];
setInterval(function () {
    for (; lastIndexProcessed < window.dataLayer.length; lastIndexProcessed++) {
        const dlEvent = evaluateDLEvent(window.dataLayer[lastIndexProcessed]);
        if (!dlEvent) continue;
        try {
            db.setProperty({[dlEvent.getEventName()]: dlEvent.isValid() ? 1 : 0})
        } catch (e) {
            console.log(e);
        }
    }
}, 1000);