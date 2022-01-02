// Content script acts as a relay.
// Can't communicate directly from injected script to background page
// console.log("content script loaded")
let tabId;
window.addEventListener("__elever_injected_script_message", async function (event) {
    console.log("Called conent_script.js")
    // let queryOptions = { active: true, currentWindow: true };
    // let [tab] = await chrome.tabs.query(queryOptions);
    // console.log(tab)
    chrome.storage.local.set({ db: Object.assign({}, event.detail.db) }, function () {});
});
