import { Notyf } from 'notyf';

let notyf = new Notyf();
export class Logger {
    static logToConsole(errors, verificationSummary, additionalText, dataLayerObject, schemaExample) {
        if (errors.length > 0) {
            notyf.error({ message: verificationSummary, duration: 0})
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
            notyf.success({ message: verificationSummary, duration: 0})
            console.log(
                "%c" + verificationSummary + " " + (additionalText ? additionalText : ""),
                "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
            );
        }
    }
}
