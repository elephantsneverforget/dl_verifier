// Set the events DB
chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.msg == "DBUPDATE") {
        let db = Object.assign({}, request.data);
        chrome.storage.local.set(
            { [`${sender.tab.id}-eventsDB`]: db },
            function () {}
        );
    }
    return true; // Required to keep message port open
});

// Set gtmLoaded to true when GTM container loads
chrome.webRequest.onCompleted.addListener(
    function (response) {
        // If loading GTM Suite events script or GTM
        // console.log("set to true gtmLoaded. Tab ID is: " + response.tabId);
        if (response.statusCode === 200) {
            let gtmContainerId = new RegExp("(?<=id=).{11}").exec(response.url)
                ? new RegExp("(?<=id=).{11}").exec(response.url)[0]
                : undefined;
            chrome.storage.local.set(
                {
                    [`${response.tabId}-gtmLoaded`]: "verified",
                    [`${response.tabId}-gtmContainerId`]: gtmContainerId,
                },
                function () {}
            );
        } else {
            chrome.storage.local.set(
                { [`${response.tabId}-gtmLoaded`]: "failed" },
                function () {}
            );
        }
    },
    {
        urls: ["*://*/*gtm.js?id=GTM-*"],
    }
);

// Set DL listener loaded status
chrome.webRequest.onCompleted.addListener(
    function (response) {
        if (response.statusCode === 200) {
            chrome.storage.local.set(
                { [`${response.tabId}-dlListenerLoaded`]: "verified" },
                function () {}
            );
        } else {
            chrome.storage.local.set(
                { [`${response.tabId}-dlListenerLoaded`]: "failed" },
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
    resetBaseValues(details.tabId);
});

// Setup any base values on initial load
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    resetBaseValues(tabs[0].id);
});

const resetBaseValues = (tabId) => {
    console.log("Resetting base values");
    chrome.storage.local.set(
        {
            [`${tabId}-dlListenerLoaded`]: "unseen",
            [`${tabId}-gtmLoaded`]: "unseen",
            [`${tabId}-gtmContainerId`]: undefined,
        },
        function () {}
    );
};
