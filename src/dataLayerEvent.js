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

    isString(val) {

    }

    isNumber(val) {

    }

    isUndefined(val) {
        return typeof val === 'undefined' || val == null;
    }
}

export class DLViewItem extends DLEvent {
    constructor(dataLayerObject) {
        super(dataLayerObject);
    }

    // Should return an array of messages starting with the event type we are verifying + whether it was verified or not.
    verify() {
        this.logVerificationOutcome();
    }
}