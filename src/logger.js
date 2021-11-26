export class Logger {
    static logToConsole(messages) {
        console.group(
            "%cFound dl_view_item",
            "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
        );
        console.log("Found dl_view_item");
        console.groupEnd();
    }

    static logToToast(message) {
        Toastify({
            text: message,
            // duration: 5000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
}