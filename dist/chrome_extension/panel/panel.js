import { h, render } from "./preact/preact.js";
import htm from "./preact/preact_htm.js";

const html = htm.bind(h);
let db, tabId, gtmLoaded, dlListenerLoaded;

const DLEventStatusElement = (props) => {
    const getEventStatusIcon = (eventStatus) => {
        switch (eventStatus) {
            case 0:
                return "assets/x-circle.svg";
            case 1:
                return "assets/check-circle.svg";
            case 2:
                return "assets/eye-off.svg";
            default:
                return "";
        }
    };
    const getEventStatusText = (eventStatus) => {
        switch (eventStatus) {
            case 0:
                return "Failed Verification";
            case 1:
                return "Verified";
            case 2:
                return "Not Seen";
            default:
                return "";
        }
    };
    return html`
        <div class="status-element">
            <div class="event-title">${props.eventName}</div>
            <div class="event-status ${getStatusCSS(props.eventStatus)}">
                <span>${getEventStatusText(props.eventStatus)}</span>
                <img
                    class="icon"
                    src="${getEventStatusIcon(props.eventStatus)}"
                    height="15"
                    width="15"
                />
            </div>
        </div>
    `;
};

const ScriptStatusElement = (props) => {
    const getLoadStatusIcon = (scriptLoaded) => {
        switch (scriptLoaded) {
            case true:
                return "assets/check-circle.svg";
            case false:
                return "assets/eye-off.svg";
            default:
                return "";
        }
    };
    return html`
        <div class="status-element">
            <div class="event-title">${props.eventName}</div>
            <div class="event-status ${props.loaded ? "verified" : "not-seen"}">
                <span>${props.loaded ? "Loaded" : "Not Seen"}</span>
                <img
                    class="icon"
                    src="${getLoadStatusIcon(props.loaded)}"
                    height="15"
                    width="15"
                />
            </div>
        </div>
    `;
};

const App = (props) => {
    return props.db?.events
        ? html`
              <div class="wrapper">
                  <div class="container events-container">
                      ${Object.keys(props.db.events).map(
                          (event) =>
                              html`<${DLEventStatusElement}
                                  eventName=${event}
                                  eventStatus=${props.db.events[event]}
                              />`
                      )}
                  </div>
                  <div class="container scripts-container">
                      <${ScriptStatusElement}
                          eventName="GTM Loaded"
                          loaded=${props.gtmLoaded}
                      />
                      <${ScriptStatusElement}
                          eventName="DL Listener Loaded"
                          loaded=${props.dlListenerLoaded}
                      />
                      <p style="width: 200px; color: black; font-size: 13px;">
                          This extension does not validate the contents of your
                          events, only the shape and type of each property. See
                          our documentation for more information.
                      </p>
                      <p style="width: 200px; color: black; font-size: 13px;">
                          <b
                              >Open the console to get detailed error messages
                              for each event.</b
                          >
                      </p>
                      <button class="reset-button" onClick=${() => reset()}>
                          Reset
                      </button>
                  </div>
              </div>
          `
        : html`<div>Waiting for data. Fire an event.</div>`;
};

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
        if (changes[`${tabId}-gtmLoaded`]?.newValue !== changes[`${tabId}-gtmLoaded`]?.oldValue) {
            // console.log("gtmLoaded in panel.js");
            gtmLoaded = changes[`${tabId}-gtmLoaded`]?.newValue;
        }
        if (changes[`${tabId}-dlListenerLoaded`]?.newValue !== changes[`${tabId}-dlListenerLoaded`]?.oldValue) {
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

function getStatusCSS(value) {
    if (value === 1) return "verified";
    if (value === 0) return "error";
    return "not-seen";
}

const reset = () => {
    chrome.tabs.sendMessage(tabId, { msg: "RESET", tabId: tabId }, {frameId: 0}, ()=>true);
    console.log("Sent reset");
};
