// Content script acts as a relay.
// Can't communicate directly from injected script to background page

window.addEventListener(
    "__elever_injected_script_message",
    async function (event) {
        // console.log("Sending message in content_script.js");
        chrome.runtime.sendMessage(
            { msg: "DBUPDATE", data: event.detail.db },
            () => {
            }
        );
    }
);

// Listen for DB reset notification and relay to content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.msg === "RESET") {
        window.dispatchEvent(
            new CustomEvent("__elever_reset_db", { tabId: sender.tabId })
        );
        chrome.storage.local.set(
            { [`${request.tabId}-dlListenerLoaded`]: "unseen", [`${request.tabId}-gtmLoaded`]: "unseen" },
            function () {}
        );
        sendResponse();
    }
});

// Inject the joi script into the active tab
if (window.contentScriptInjected !== true) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = chrome.runtime.getURL("index.js");
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(script);
    console.log("injecting script");
    window.contentScriptInjected = true;
}
