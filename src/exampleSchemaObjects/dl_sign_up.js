import { marketingObject } from "./marketing_object";
import { userPropertiesLoggedIn } from "./user_properties_logged_in";

export const dl_sign_up_schema_example = {
    event: "dl_sign_up",
    event_id: "0446f7d6-070d-44e7-b355-06a27d0fc312", // unique uuid for FB conversion API
    marketing: marketingObject,
    user_properties: userPropertiesLoggedIn,
    event_time: "2022-05-22T22:56:52.748Z",
    page: { title: "Page Title" },
};
