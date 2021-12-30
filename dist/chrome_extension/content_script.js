// Content script acts as a relay. 
// Can't communicate directly from injected script to background page
console.log("content script")
window.addEventListener('message', function(event) {
    // Only accept messages from the same frame
    if (event.source !== window) {
      return;
    }
  
    var message = event.data;
  
    // Only accept messages that we know are ours
    if (typeof message !== 'object' || message === null) {
      return;
    }
  
    chrome.runtime.sendMessage(message);
  });