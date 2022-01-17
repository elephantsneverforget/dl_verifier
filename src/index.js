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
import { Logger } from "./logger";

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

if (typeof db === 'undefined') {
    var db = new DB();
}
var logger = new Logger();
function evaluateDLEvent(dlEventObject) {
    const dlEventName = dlEventObject.event;
    if (typeof dlEventObject !== "object" || !(dlEventName in dlEventMap))
        return null;
    const dlEvent = new dlEventMap[dlEventName](dlEventObject);
    dlEvent.verify();
    dlEvent.logVerificationOutcome();

    try {
        db.setProperty(dlEvent.getEventName(), dlEvent.isValid() ? 1 : 0);
        window.dispatchEvent(
            new CustomEvent("__elever_injected_script_message", {
                detail: { db: db.getDB() },
            })
        );
        console.log("Sent event from index.js")
    } catch (e) {
        console.log(e);
    }
}

function resetDB() {
    db.clear();
    window.dispatchEvent(
        new CustomEvent("__elever_injected_script_message", {
            detail: { db: db.getDB() },
        })
    );
}

function buildInterface(){
    let body = document.getElementsByTagName("body")[0];
    // let buttonWrapper = document.createElement("div")
    // buttonWrapper.classList.add("button-wrapper")
    let clearVerificationButton = document.createElement("button");
    clearVerificationButton.classList.add("clear-events", "button-dlv");
    clearVerificationButton.innerText = "Reset"
    clearVerificationButton.onclick = resetDB;
    body.appendChild(clearVerificationButton);
    let clearToastButton = document.createElement("button");
    clearToastButton.classList.add("clear-toasts", "button-dlv"); 
    clearToastButton.innerText = "Clear";
    clearToastButton.onclick = logger.clearAllNotifications;
    body.appendChild(clearToastButton);
}

buildInterface();

// Listen for DL updates and push for evaluation
let lastIndexProcessed = 0;
window.dataLayer = window.dataLayer || [];
setInterval(function () {
    for (; lastIndexProcessed < window.dataLayer.length; lastIndexProcessed++) {
        evaluateDLEvent(window.dataLayer[lastIndexProcessed]);
    }
}, 1000);

// window.onload =()=> db.setProperty("dl_user_data", 2);