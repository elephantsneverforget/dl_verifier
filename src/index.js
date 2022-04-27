import {
    DLEvent
} from "./eventTypes/dlEvents.js";

import { DB } from "./db";

dataLayerDB;
if (typeof dataLayerDB === "undefined") {
    var dataLayerDB = new DB();
}

// Sends a copy of the db to the background script for routing to the panel
const sendUpdatedDB = () => {
    window.dispatchEvent(
        new CustomEvent("__elever_injected_script_message", {
            detail: { db: dataLayerDB.getDB() },
        })
    );
};

// Evaluate each relevant event that's pushed to the DL
const evaluateDLEvent = (dlEventObject) => {
    if (!DLEvent.shouldProcessEvent(dlEventObject)) return;
    const dlEvent = DLEvent.dlEventFactory(dlEventObject, window.dataLayer);
    try {
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

// Listen for db reset event from panel.js
window.addEventListener("__elever_reset_db", async function () {
    // console.log("Reset DB called");
    dataLayerDB.clear();
    sendUpdatedDB();
});

// Send initial db to background script
sendUpdatedDB();
