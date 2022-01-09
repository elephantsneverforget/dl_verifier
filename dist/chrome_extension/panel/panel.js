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
        ? html`<table id="popup">
              <tr>
                  <th>Event</th>
                  <th>Status</th>
              </tr>
              ${Object.keys(props.eventList).map(
                  (event) => html`
                      <tr>
                          <td>
                              <div>${event}</div>
                          </td>
                          <td>
                              <div>${getStatus(props.eventList[event])}</div>
                          </td>
                      </tr>
                  `
              )}
          </table>`
        : html`<div>Waiting for data. Fire an event.</div>`;
}

// Get the most recent version of the DB so we don't have to wait for an event to render it.
setTimeout(function () {
    chrome.storage.local.get(function (result) {
        eventList = result.db;
    });
    doRender();
}, 1000);

chrome.storage.onChanged.addListener(function (changes, namespace) {
    eventList = changes.db.newValue
    doRender();
  });

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

doRender();

// What tab am I?
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabId = tabs.id;
});
