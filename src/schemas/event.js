import joi from "joi";
export const getEventNameSchema = function (eventName) {
    return joi.string().valid(eventName).required();
};
