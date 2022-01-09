// Content script acts as a relay.
// Can't communicate directly from injected script to background page
// console.log("content script loaded")
let tabId;
// What tab am I?

window.addEventListener("__elever_injected_script_message", async function (event) {
    chrome.runtime.sendMessage({ msg: "Update", data: event.detail.db }, (response) => {
        // response will be received from the background script, but originally sent by filler.js
        if (response) {
            console.log(response)
        }
    });
});
