import joi from "joi";
export const getEventNameSchema = function (eventName) {
    return joi.string().valid(eventName).required().messages({
        "any.required": `"event" is a required field on the data layer object and should contain and event name such as dl_view_item, dl_add_to_cart etc...`, })
};
