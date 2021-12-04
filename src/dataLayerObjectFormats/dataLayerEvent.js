export class DLEvent {
    constructor(dataLayerObject) {
        this.dataLayerObject = dataLayerObject;
    }

    logVerificationOutcome(messages) {
        this.errors = messages;
        // Log details in console
        Logger.logToToast(message[0]);
        // Log toast
        Logger.logToConsole(messages);
    }
}

