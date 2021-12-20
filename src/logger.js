export class Logger {
    static logToConsole(errors, verificationSummary, additionalText, dataLayerObject, schemaExample) {
        if (errors.length > 0) {
            console.group(
                "%c" + verificationSummary,
                "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
            );
            errors.forEach((error) => console.log(error.message));
            console.group("Object pushed to datalayer")
            console.log(dataLayerObject)
            console.groupEnd()
            console.group("Reference object with correct shape")
            console.log(schemaExample)
            console.groupEnd()
            console.groupEnd();
        } else {
            console.log(
                "%c" + verificationSummary + " " + additionalText,
                "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
            );
        }
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
