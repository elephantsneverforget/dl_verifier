import { Notyf } from "notyf";
let notyf = new Notyf();
export class Logger {
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
                duration: 0,
                dismissible: true,
                position: {x:'left',y:'bottom'}
            });
            console.group(
                "%c" + verificationSummary,
                "background-color: #ed3d3d ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
            );
            errors.forEach((error) => console.log(error.message));
            console.group("Object pushed to datalayer");
            console.log(dataLayerObject);
            console.groupEnd();
            console.group("Reference object with correct shape");
            console.log(schemaExample);
            console.groupEnd();
            console.groupEnd();
        } else {
            notyf.success({
                message: verificationSummary,
                duration: 0,
                dismissible: true,
                position: {x:'left',y:'bottom'}
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
