chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.msg == "DBUPDATE") {
        let db = Object.assign({}, request.data);
        let tabId = sender.tab.id; 
        console.log("Saving db to local storage, tab ID is: " + tabId)
        chrome.storage.local.set({ [`${tabId}`]: db }, function () {});
        // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        //     // relay finder.js's message to filler.js
        //     chrome.tabs.sendMessage(tabs[0].id, request, (response) => {
        //         console.log('Received message in BG script')
        //         if (response) {
        //             if (response.data) {
        //                 // relay filler.js's response to finder.js
        //                 sendResponse({ data: response.data });
        //             }
        //         }
        //     });
        // });
    }
    return true; // Required to keep message port open
});
