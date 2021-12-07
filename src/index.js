{
  /* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"> */
}
{
  /* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script> */
}

import { DLEventViewItem } from "./eventTypes/dlEventViewItem.js";
export { DLEventViewItem };
export { evaluateDLEvent };

function evaluateDLEvent(dlEventId) {
  const dlEventObect = window.dataLayer.find(
    (dlEvent) => dlEvent["gtm.uniqueEventId"] === dlEventId
  );
  const dlEventName = dlEventObect.event;
  if (dlEventName in dlEventMap) {
    const dlEvent = new dlEventMap[dlEventName](dlEventObect);
    dlEvent.verify();
    dlEvent.logVerificationOutcome();
  } else {
    console.log("Event name: " + dlEventName + " not in available data layer verifiers");
  }
}

const dlEventMap = {
  'dl_view_item': DLEventViewItem,
  // 'dl_add_to_cart': DLAddToCart,
};