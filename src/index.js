{
  /* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"> */
}
{
  /* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script> */
}

import { Logger } from "./logger.js";
import { DLViewItem } from "./dataLayerObjectFormats/dlViewItem.js";

function evaluateDLEvent(dlEventId) {
  const dlEventObect = dataLayer.find(
    (dlEvent) => dlEvent["gtm.uniqueEventId"] === dlEventId
  );
  const dlEventName = dlEventObect.event;
  if (dlEventName in dlEventMap) {
    const dlEvent = eventMap[dlEventName](dlEventObect);
    dlEvent.verify();
  }
}

const dlEventMap = {
  dl_view_item: DLViewItem,
  // 'dl_add_to_cart': DLAddToCart,
};

evaluateDLEvent("id");
const dlViewItem = new DLViewItem({ event: "dl_view_item", id: "3qwr" });
console.log(dlViewItem.verify());
// evaluateDLEvent({{dlv - DL Verifier - GTM unique event ID}});
