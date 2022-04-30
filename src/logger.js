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
        schemaExample,
        isMissingUserData
    ) {
        if (errors.length > 0 || isMissingUserData) {
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
            if (isMissingUserData) {
                console.log(
                    "%c" + "Event not preceded by dl_user_data in the data layer",
                    "display: inline-block ; background-color: gold ; color: black ; font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;"
                );
            }
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
            console.group("Reference object with correct shape. Cookie values are samples and not accurate for your this site.");
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
        }
    }
}
