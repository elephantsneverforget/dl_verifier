// import { h, Component, render } from 'https://unpkg.com/preact?module';
// import htm from 'https://unpkg.com/htm?module';
import { h, Component, render } from "./preact.js";
import htm from "./preact_htm.js";
// Initialize htm with Preact
// DevTools page -- devtools.js
// Create a connection to the background page
// Create a connection to the background page

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
                              ${getStatus(props.eventList[event])}
                          </div>
                      </div>
                  `
              )}
          </div>`
        : html`<div>Waiting for data. Fire an event.</div>`;
}

// Get the most recent version of the DB so we don't have to wait for an event to render it.
setTimeout(function () {
    chrome.storage.local.get(function (result) {
        eventList = result.db;
    });
    doRender();
}, 1000);

function doRender() {
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

doRender();

// What tab am I?
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log("What tab am I?: " + tabs[0].id);
    console.log(tabs);
    tabId = tabs[0].id;
    chrome.storage.onChanged.addListener(function (changes, namespace) {
        console.log(changes);
        eventList = changes[tabId].newValue;
        doRender();
    });
});
