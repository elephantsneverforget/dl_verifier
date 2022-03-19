import { h, render } from "./preact.js";
import htm from "./preact_htm.js";

const html = htm.bind(h);
let db, tabId, gtmLoaded, dlListenerLoaded;

function App(props) {
    console.log("Props.events " + JSON.stringify(props.events));
    return props.db?.events
        ? html`
              <div class="wrapper">
                  <div class="container">
                      ${Object.keys(props.db.events).map(
                          (event) => html`
                              <div>
                                  <div class="event-title">${event}</div>
                                  <div
                                      class="event-status ${getStatusCSS(
                                          props.db.events[event]
                                      )}"
                                  >
                                      <span
                                          >${getStatus(
                                              props.db.events[event]
                                          )}</span
                                      >
                                  </div>
                              </div>
                          `
                      )}
                  </div>
                  <div class="container"></div>
              </div>
              <div>${props.gtmLoaded ? "GTM Loaded" : "nota"}</div>
              <div>
                  ${props.dlListenerLoaded ? "DL Listener Loaded" : "nota"}
              </div>
          `
        : html`<div>Waiting for data. Fire an event.</div>
              <div>${props.gtmLoaded ? "GTM Loaded" : "nota"}</div>
              <div>
                  ${props.dlListenerLoaded ? "DL Listener Loaded" : "nota"}
              </div> `;
}

// What tab am I?
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabId = tabs[0].id;
    // Get a copy of the db so we don't have to wait until the first change to display it.
    chrome.storage.local.get(function (result) {
        // console.log("In storage.local.get. Tab ID is: " + tabId);
        // console.log(result);
        // console.log("First load");
        db = result[tabId];
        gtmLoaded = result[`${tabId}-gtmLoaded`];
        dlListenerLoaded = result[`${tabId}-dlListenerLoaded`];
        renderPanel();
    });
    // Listen to changes on the db object
    chrome.storage.onChanged.addListener(function (changes) {
        console.log("In changes");
        console.log(changes);
        if (changes[`${tabId}-gtmLoaded`]?.newValue) {
            // console.log("gtmLoaded in panel.js");
            gtmLoaded = changes[`${tabId}-gtmLoaded`]?.newValue;
        }
        if (changes[`${tabId}-dlListenerLoaded`]?.newValue) {
            // console.log("dlListenerloaded in panel.js");
            dlListenerLoaded = changes[`${tabId}-dlListenerLoaded`]?.newValue;
        }
        if (typeof changes[tabId] !== "undefined") {
            // console.log("db updated in panel.js");
            db = changes[tabId].newValue;
        }
        renderPanel();
    });
});

function renderPanel() {
    console.log("Event list: " + JSON.stringify(db));
    render(
        html`<${App}
            db="${db}"
            gtmLoaded="${gtmLoaded}"
            dlListenerLoaded="${dlListenerLoaded}"
        />`,
        document.body
    );
}

function getStatus(value) {
    if (value === 1) return "Verified";
    if (value === 0) return "Failed Verification";
    return "Event Not Seen";
}

function getStatusCSS(value) {
    if (value === 1) return "verified";
    if (value === 0) return "error";
    return "not-seen";
}
