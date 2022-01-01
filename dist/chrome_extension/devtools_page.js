chrome.devtools.panels.create(
    "Elevar DLV",
    "./icons/icon48.png",
    "./panel/panel.html",
    // code invoked on panel creation
    function (panel) {
        console.log(panel)
        var _window;
        let data = [];
        var port = chrome.runtime.connect({ name: "panel" });
        port.onMessage.addListener((msg) => {
            if(_window) {
                _window.doRender(msg)
            } else {
                data.push(msg)
            }
        });

        panel.onShown.addListener(function tmp(panelWindow) {
            panel.onShown.removeListener(tmp);
            _window = panelWindow;
            data.forEach((data)=> _window.doRender(data))
        })

        
        console.log("Sending message from devtools_page.js")
        port.postMessage({
            name: "init",
            tabId: chrome.devtools.inspectedWindow.tabId,
        });

    }
);
