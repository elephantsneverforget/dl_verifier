// Content script acts as a relay.
// Can't communicate directly from injected script to background page

window.addEventListener("__elever_injected_script_message", async function (event) {
    console.log("Sending message in content_script.js")
    chrome.runtime.sendMessage({ msg: "DBUPDATE", data: event.detail.db }, (response) => {
        // response will be received from the background script, but originally sent by filler.js
        if (response) {
            console.log(response)
        }
    });
});