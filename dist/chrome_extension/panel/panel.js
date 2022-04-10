import { h, render } from "./preact/preact.js";
import htm from "./preact/preact_htm.js";

const html = htm.bind(h);
let db, tabId, gtmLoaded, dlListenerLoaded, gtmContainerId;

const optionalEvents = ["dl_sign_up", "dl_login", "dl_search_results"];

const nonPlusOnlyEvents = ["dl_begin_checkout"];

const DLEventStatusElement = (props) => {
    const eventIsOptional = (eventName) => {
        return optionalEvents.indexOf(eventName) > -1;
    };
    const eventIsNonPlusOnly = (eventName) => {
        return nonPlusOnlyEvents.indexOf(eventName) > -1;
    };
    return html`
        <div class="status-element">
            ${eventIsOptional(props.eventName)
                ? html`<div class="optional-label">OPTIONAL</div>`
                : null}
            ${eventIsNonPlusOnly(props.eventName)
                ? html`<div class="optional-label">NON PLUS STORES ONLY</div>`
                : null}
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
    return html`
        <div class="status-element">
            <div class="event-title">${props.eventName}</div>
            <div class="event-status ${getStatusCSS(props.loaded)}">
                <span>${getEventStatusText(props.loaded)}</span>
                <img
                    class="icon"
                    src="${getEventStatusIcon(props.loaded)}"
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
                  <div class="events-container-wrapper">
                      <div class="container events-container">
                          ${Object.keys(props.db.events)
                              .sort(orderEvents)
                              .map(
                                  (event) =>
                                      html`<${DLEventStatusElement}
                                          eventName=${event}
                                          eventStatus=${props.db.events[event]}
                                      />`
                              )}
                      </div>
                  </div>
                  <div class="container scripts-container">
                      <${ScriptStatusElement}
                          eventName=${props.gtmLoaded === "verified"
                              ? gtmContainerId
                              : "GTM Script"}
                          loaded=${props.gtmLoaded}
                      />
                      <${ScriptStatusElement}
                          eventName="DL Listener"
                          loaded=${props.dlListenerLoaded}
                      />
                      <button class="reset-button" onClick=${() => reset()}>
                          Reset
                      </button>
                      <p style="width: 200px; color: black; font-size: 12px;">
                          This extension does not validate the contents or
                          timing of your events, only the shape. See our
                          <a
                              style="color: black;"
                              href="https://www.notion.so/elevar/Elevar-Headless-Onboarding-Guide-01bd8ddc8b5e48ea8caa3ca99cab5021"
                              target="_blank"
                              >documentation</a
                          >
                          for more information.
                      </p>
                      <p style="width: 200px; color: black; font-size: 12px;">
                          <b
                              >Open the console to see detailed error
                              messages.</b
                          >
                      </p>
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
        db = result[`${tabId}-eventsDB`];
        gtmLoaded = result[`${tabId}-gtmLoaded`];
        gtmContainerId = result[`${tabId}-gtmContainerId`];
        dlListenerLoaded = result[`${tabId}-dlListenerLoaded`];
        renderPanel();
    });
    // Listen to changes
    chrome.storage.onChanged.addListener(function (changes) {
        // console.log("In changes");
        // console.log(changes);
        if (
            changes[`${tabId}-gtmLoaded`]?.newValue !==
            changes[`${tabId}-gtmLoaded`]?.oldValue
        ) {
            // console.log("gtmLoaded in panel.js");
            gtmLoaded = changes[`${tabId}-gtmLoaded`]?.newValue;
        }
        if (
            changes[`${tabId}-dlListenerLoaded`]?.newValue !==
            changes[`${tabId}-dlListenerLoaded`]?.oldValue
        ) {
            // console.log("dlListenerloaded in panel.js");
            dlListenerLoaded = changes[`${tabId}-dlListenerLoaded`]?.newValue;
        }
        if (typeof changes[`${tabId}-eventsDB`] !== "undefined") {
            console.log("db updated in panel.js");
            db = changes[`${tabId}-eventsDB`].newValue;
        }
        renderPanel();
    });
});

const renderPanel = () => {
    // console.log("Event list: " + JSON.stringify(db));
    render(
        html`<${App}
            db="${db}"
            gtmLoaded="${gtmLoaded}"
            dlListenerLoaded="${dlListenerLoaded}"
        />`,
        document.body
    );
}

const getStatusCSS = (value) => {
    if (value === "verified") return "verified";
    if (value === "failed") return "error";
    return "not-seen";
}

const reset = () => {
    chrome.tabs.sendMessage(
        tabId,
        { msg: "RESET", tabId: tabId },
        { frameId: 0 },
        () => true
    );
};

const orderEvents = (a) => {
    if (optionalEvents.includes(a)) return 1;
    if (nonPlusOnlyEvents.includes(a)) return 1;
    return -1;
};

const getEventStatusText = (eventStatus) => {
    switch (eventStatus) {
        case "failed":
            return "Failed Verification";
        case "verified":
            return "Verified";
        case "unseen":
            return "Not Seen";
        default:
            return "";
    }
};

const getEventStatusIcon = (eventStatus) => {
    switch (eventStatus) {
        case "failed":
            return "assets/x-circle.svg";
        case "verified":
            return "assets/check-circle.svg";
        case "unseen":
            return "assets/eye-off.svg";
        default:
            return "";
    }
};
