import { h, render } from "./preact.js";
import htm from "./preact_htm.js";

const html = htm.bind(h);
let eventList, tabId;

function App(props) {
    return props.eventList
        ? html`<div class="container">
              ${Object.keys(props.eventList).map(
                  (event) => html`
                      <div>
                          <div class="event-title">${event}</div>
                          <div class="event-status ${getStatusCSS(props.eventList[event])}">
                              <span>${getStatus(props.eventList[event])}</span>
                         </div>
                      </div>
                  `
              )}
          </div>
          `
        : html`<div>Waiting for data. Fire an event.</div>`;
}

// What tab am I?
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabId = tabs[0].id;
    // Get a copy of the db so you we don't have to wait until the first change to display it.
    chrome.storage.local.get(function (result) {
        eventList = result[tabId];
        renderPanel();
    });
    // Listen to changes on the db object
    chrome.storage.onChanged.addListener(function (changes, namespace) {
        console.log(changes);
        if (typeof changes[tabId] === 'undefined') {
            return;
        }
        eventList = changes[tabId].newValue;
        renderPanel();
    });
});

function renderPanel() {
    render(
        html`<${App} name="World" eventList="${eventList}" />`,
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
