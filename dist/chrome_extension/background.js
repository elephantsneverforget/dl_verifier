chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.msg == "DBUPDATE") {
        let db = Object.assign({}, request.data);
        let tabId = sender.tab.id;
        console.log("Saving db to local storage, tab ID is: " + tabId);
        chrome.storage.local.set({ [`${tabId}`]: db }, function () {});
    }
    return true; // Required to keep message port open
});

chrome.webRequest.onCompleted.addListener(function(val){
    console.log(val)
}, {urls: ["<all_urls>"]})