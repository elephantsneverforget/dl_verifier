import { Logger } from "../logger";
import { getEventNameSchema } from "../schemas/event";
import { eventId } from "../schemas/eventId.js";
import Joi from "joi";

export class DLEvent {
    constructor(dataLayerObject) {
        this.dataLayerObject = dataLayerObject;
        this.verified = false;
        this.errors;
        this.verificationSummary;
        this.valid;
    }

    verify(schemas, eventName) {
        if (this.verified === true)
            throw new Error("Can't call verify more than once.");
        const dlEventSchema = Joi.object().keys({
            event: getEventNameSchema(eventName),
            event_id: eventId,
            ...schemas,
        });
        const validation = dlEventSchema.validate(this.dataLayerObject, {
            abortEarly: false,
        });

        if (validation.error) {
            this.valid = false;
            this.error = validation.error;
        } else {
            this.valid = true;
            this.verificationSummary = `${eventName} event with event_id: ${this.dataLayerObject.event_id} is valid.`
        }
        return validation;
    }

    getErrors() {
        return this.errors;
    }

    getVerificationSummary() {
        return this.verificationSummary;
    }

    logVerificationOutcome(messages) {
        this.errors = messages;
        // Log details in console
        Logger.logToToast(this.verificationSummary);
        // Log toast
        Logger.logToConsole(this.errors, this.verificationSummary);
    }
}
