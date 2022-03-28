// Content script acts as a relay.
// Can't communicate directly from injected script to background page

window.addEventListener(
    "__elever_injected_script_message",
    async function (event) {
        // console.log("Sending message in content_script.js");
        chrome.runtime.sendMessage(
            { msg: "DBUPDATE", data: event.detail.db },
            (response) => {
                // response will be received from the background script, but originally sent by filler.js
                if (response) {
                    console.log(response);
                }
            }
        );
    }
);

// Listen for DB reset notification and relay to content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.msg === "RESET") {
        // console.log(sender)
        // console.log(request)
        // console.log("Received reset message in content_script.js");
        window.dispatchEvent(new CustomEvent("__elever_reset_db", {tabId: sender.tabId}));
        chrome.storage.local.set(
            { [`${request.tabId}-dlListenerLoaded`]: false },
            function () {}
        );
        chrome.storage.local.set(
            { [`${request.tabId}-gtmLoaded`]: false },
            function () {}
        );
        sendResponse();
    }
});