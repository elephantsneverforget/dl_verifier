{/* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"> */ }
{/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script> */ }

import { Logger } from './logger'
import { DLViewItem } from './dataLayerEvent';

// Each time the tag fires pass event name + event object
evaluateDLEvent('id')

function evaluateDLEvent(dlEventId) {
    const dlEventObect = dataLayer.find((dlEvent) => dlEvent['gtm.uniqueEventId'] === dlEventId);
    const dlEventName = dlEventObect.event;
    switch (dlEventName) {
        case 'dl_view_item':
            // Find the object based on id in the DLEvent object

            Logger.logToConsole(dlEventName)
            const dlViewItem = new DLViewItem(dlEventObject);
            dlViewItem.verify();
            break;
        case 'dl_add_to_cart':
            console.log(dlEventName);
            break;
        case 'dl_login':
            console.log(dlEventName);
            break;
        case 'dl_user_data':
            console.log(dlEventName);
            break;
        default:
            break;
    }
}
