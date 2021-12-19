{
    /* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"> */
}
{
    /* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script> */
}

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
    DLEventSignUp
} from "./eventTypes/dlEventViewItem.js";
export {
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
    evaluateDLEvent,
};

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
    if (typeof dlEventObject !== "object") return;
    if (dlEventName in dlEventMap) {
        const dlEvent = new dlEventMap[dlEventName](dlEventObject);
        dlEvent.verify();
        dlEvent.logVerificationOutcome();
    } else {
        // console.log(
        //     "Event name: " +
        //         dlEventName +
        //         " not in available data layer verifiers"
        // );
    }
}
