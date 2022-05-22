import { marketingObject } from "./marketing_object";
import { userPropertiesNotLoggedIn } from "./user_properties_not_logged_in copy";

export const dl_user_data_schema_example = {
    cart_total: "100.00",
    event: "dl_user_data",
    event_id: "8ff28e85-0503-484e-bb86-53110aba98fb",
    marketing: marketingObject,
    user_properties: userPropertiesNotLoggedIn,
    event_time: "2022-05-22T22:56:52.748Z",
    page: { title: "Page Title" },
    device: {
        screen_resolution: "3008x1692",
        viewport_size: "1311x2834",
        encoding: "UTF-8",
        language: "en-US",
        colors: "24-bit",
    },
};
