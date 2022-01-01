// Content script acts as a relay. 
// Can't communicate directly from injected script to background page
console.log("content script loaded")
window.addEventListener('__elever_injected_script_message', function(event) {
    // Only accept messages from the same frame
    console.log("received message from injected script")
    console.log(event.detail)
    // var message = event.data;
    // // Only accept messages that we know are ours
    chrome.runtime.sendMessage(event.detail);
  });