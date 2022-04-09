// Set the events
chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.msg == "DBUPDATE") {
        let db = Object.assign({}, request.data);
        let tabId = sender.tab.id;
        chrome.storage.local.set({ [`${tabId}`]: db }, function () {});
    }
    return true; // Required to keep message port open
});

// Set gtmLoaded to true when GTM container loads
chrome.webRequest.onCompleted.addListener(
    function (response) {
        var gtmContainerId = new RegExp("(?<=id=).*").exec(response.url)[0];
        console.log(gtmContainerId);
        console.log(response);
        // If loading GTM Suite events script or GTM
        // console.log("set to true gtmLoaded. Tab ID is: " + response.tabId);
        if (response.statusCode === 200) {
            chrome.storage.local.set(
                {
                    [`${response.tabId}-gtmLoaded`]: 1,
                    [`${response.tabId}-gtmContainerId`]: gtmContainerId,
                },
                function () {}
            );
        } else {
            chrome.storage.local.set(
                { [`${response.tabId}-gtmLoaded`]: 0 },
                function () {}
            );
        }
    },
    {
        urls: ["*://*/*gtm.js?id=GTM-*"],
    }
);

// Set dlListenerLoaded to true when listener loads
chrome.webRequest.onCompleted.addListener(
    function (response) {
        // If loading GTM Suite events script or GTM
        // console.log("set to true DL Listener loaded. Tab ID is: " + response.tabId);
        if (response.statusCode === 200) {
            chrome.storage.local.set(
                { [`${response.tabId}-dlListenerLoaded`]: 1 },
                function () {}
            );
        } else {
            chrome.storage.local.set(
                { [`${response.tabId}-dlListenerLoaded`]: 0 },
                function () {}
            );
        }
    },
    {
        urls: ["*://shopify-gtm-suite.getelevar.com/*/*events.js"],
    }
);

// Clear the script listener looaded booleans before the next page reload
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    if (details.frameId !== 0) return;
    chrome.storage.local.set(
        { [`${details.tabId}-dlListenerLoaded`]: null },
        function () {}
    );
    chrome.storage.local.set(
        {
            [`${details.tabId}-gtmLoaded`]: null,
            [`${details.tabId}-gtmContainerId`]: null,
        },
        function () {}
    );
});
