import Joi from "joi";
export const getEventNameSchema = function (eventName) {
    return Joi.string().valid(eventName).required();
};
