import { Logger } from "../logger.js";
import { getEventNameSchema } from "../schemas.js";
import { eventId } from "../schemas.js";
import joi from "joi";

export class DLEvent {
    constructor(dataLayerObject) {
        this.dataLayerObject = dataLayerObject;
        this._verificationRun = false;
        this._errors;
        this._verificationSummary;
        this._isValid;
    }

    verify(schemas, eventName) {
        if (this._verificationRun === true)
            throw new Error("Can't call verify more than once.");
        const dlEventSchema = joi.object().keys({
            event: getEventNameSchema(eventName),
            event_id: eventId,
            ...schemas,
        });
        const validation = dlEventSchema.validate(this.dataLayerObject, {
            abortEarly: false,
            allowUnknown: true
        });

        if (validation.error) {
            this._isValid = false;
            this._errors = validation.error;
            this._verificationSummary = `${eventName} event with event_id ${this.dataLayerObject.event_id} is invalid`
        } else {
            this._isValid = true;
            this._verificationSummary = `${eventName} event with event_id: ${this.dataLayerObject.event_id} is valid.`
        }
        return validation;
    }

    getErrors() {
        return this._errors;
    }

    isValid() {
        return this._isValid;
    }

    getVerificationSummary() {
        return this._verificationSummary;
    }

    logVerificationOutcome() {
        // Log details in console
        Logger.logToToast(this._verificationSummary);
        // Log toast
        Logger.logToConsole(this._errors, this._verificationSummary);
    }
}
