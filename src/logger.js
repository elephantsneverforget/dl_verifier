import { Notyf } from "notyf";
let notyf = new Notyf();
export class Logger {
    clearAllNotifications() {
        notyf.dismissAll();
    }

    static logToConsole(
        errors,
        verificationSummary,
        additionalText,
        dataLayerObject,
        schemaExample
    ) {
        if (errors.length > 0) {
            notyf.error({
                message: verificationSummary,
                duration: 6000,
                dismissible: false,
                position: { x: "left", y: "bottom" },
                ripple: false,
            });
            console.group(
                "%c" + verificationSummary,
                "background-color: #ed3d3d ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
            );
            errors.forEach((error) =>
                console.log(
                    "%c" + error.message,
                    "display: inline-block ; background-color: gold ; color: black ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;"
                )
            );
            console.group("Object pushed to datalayer");
            // Remove marketing and gtm.uniqueEventId from the object
            let dataLayerObjectModified = Object.assign({}, dataLayerObject);
            try {
                delete dataLayerObjectModified.marketing;
                // eslint-disable-next-line no-empty
            } catch (e) {}
            try {
                delete dataLayerObjectModified["gtm.uniqueEventId"];
                // eslint-disable-next-line no-empty
            } catch (e) {}
            try {
                delete dataLayerObjectModified.event_time;
                // eslint-disable-next-line no-empty
            } catch (e) {}
            console.log(dataLayerObjectModified);
            console.groupEnd();
            console.group("Reference object with correct shape");
            console.log(schemaExample);
            console.groupEnd();
            console.groupEnd();
        } else {
            notyf.success({
                message: verificationSummary,
                duration: 6000,
                dismissible: false,
                position: { x: "left", y: "bottom" },
                ripple: false,
            });
            console.log(
                "%c" +
                    verificationSummary +
                    " " +
                    (additionalText ? additionalText : ""),
                "background-color: #3dc763 ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
            );
        }
    }
}
