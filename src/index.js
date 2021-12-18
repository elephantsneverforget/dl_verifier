{
    /* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"> */
}
{
    /* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script> */
}

import {
    DLEventViewItem,
    DLEventAddToCart,
} from "./eventTypes/dlEventViewItem.js";
export { DLEventViewItem, DLEventAddToCart, evaluateDLEvent };

function evaluateDLEvent(dlEventObject) {
    const dlEventName = dlEventObject.event;
    const dlEventMap = {
        dl_view_item: DLEventViewItem,
        dl_add_to_cart: DLEventAddToCart,
    };
    if (typeof dlEventObject !== "object") return;
    if (dlEventName in dlEventMap) {
        const dlEvent = new dlEventMap[dlEventName](dlEventObject);
        dlEvent.verify();
        dlEvent.logVerificationOutcome()
    } else {
        // console.log(
        //     "Event name: " +
        //         dlEventName +
        //         " not in available data layer verifiers"
        // );
    }
}
