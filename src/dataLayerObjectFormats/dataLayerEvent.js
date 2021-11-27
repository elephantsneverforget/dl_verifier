export class DLEvent {
    constructor(dataLayerObject) {
        this.dataLayerObject = dataLayerObject;
    }

    logVerificationOutcome(messages) {
        // Log details in console
        Logger.logToToast(message[0]);
        // Log toast
        Logger.logToConsole(messages);
    }
}

