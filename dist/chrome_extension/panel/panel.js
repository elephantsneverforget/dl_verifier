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
                              <span>${getStatus(props.eventList[event])}</span>
                         </div>
                      </div>
                  `
              )}
          </div>
          `
        : html`<div>Waiting for data. Fire an event.</div>`;
}

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
    tabId = tabs[0].id;
    // Get a copy of the db so you we don't have 
    // to wait until the first change to display it.
    chrome.storage.local.get(function (result) {
        eventList = result[tabId];
        doRender();
    });
    // Listen to changes on the db object
    chrome.storage.onChanged.addListener(function (changes, namespace) {
        debugger;
        console.log(changes);
        if (typeof changes[tabId] === 'undefined') {
            console.log("Tab undefined")
            console.log(changes);
            console.log(namespace);
            return;
        }
        eventList = changes[tabId].newValue;
        doRender();
    });
});

// chrome.devtools.network.onRequestFinished.addListener(function (request) {
//     console.log(request);
// });
