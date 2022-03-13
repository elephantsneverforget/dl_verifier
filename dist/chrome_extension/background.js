chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.msg == "DBUPDATE") {
        let db = Object.assign({}, request.data);
        let tabId = sender.tab.id;
        console.log("Saving db to local storage, tab ID is: " + tabId);
        chrome.storage.local.set({ [`${tabId}`]: db }, function () {});
    }
    return true; // Required to keep message port open
});

chrome.webRequest.onCompleted.addListener(
    function (response) {
        // If loading GTM Suite events script or GTM
        console.log("test")
        if (response.statusCode === 200) {
            if (response.url.includes("events.js")) {
                chrome.storage.local.set({ [`${response.tabId}-dlListenerLoaded`]: true }, function () {}); 
                console.log(response);
                return;
            } else if (response.url.includes("GTM-")) {
                chrome.storage.local.set({ [`${response.tabId}-gtmLoaded`]: true }, function () {}); 
                console.log(response);
                return;
            }
        }
    },
    {
        urls: [
            "*://shopify-gtm-suite.getelevar.com/*/*events.js",
            "*://*/*gtm.js?id=GTM-*",
        ],
    }
);
