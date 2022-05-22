import { marketingObject } from "./marketing_object";
import { userPropertiesLoggedIn } from "./user_properties_logged_in";

export const dl_login_schema_example = {
    event: "dl_login",
    event_id: "0446f7d6-070d-44e7-b355-06a27d0fc312", // unique uuid for FB conversion API
    marketing: marketingObject,
    user_properties: userPropertiesLoggedIn,
    page: {title: "Page Title"}
};
