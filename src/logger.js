export class Logger {
    static logToConsole(errors, verificationSummary) {
        console.group(
            "%c" + verificationSummary,
            "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
        );
        if (errors) errors.forEach(error => console.log(error))
        console.groupEnd();
    }

    // static logToToast(message) {
        // Toastify({
        //     text: message,
        //     // duration: 5000,
        //     destination: "https://github.com/apvarun/toastify-js",
        //     newWindow: true,
        //     close: true,
        //     gravity: "top", // `top` or `bottom`
        //     position: "left", // `left`, `center` or `right`
        //     stopOnFocus: true, // Prevents dismissing of toast on hover
        //     style: {
        //         background: "linear-gradient(to right, #00b09b, #96c93d)",
        //     },
        //     onClick: function () { } // Callback after click
        // }).showToast();
    // }
}