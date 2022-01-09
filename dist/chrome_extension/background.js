chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.msg == "Update") {
        let db = Object.assign({}, request.data);
        db.tabId = sender.tab.id;
        chrome.storage.local.set({ db: db }, function () {});
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
