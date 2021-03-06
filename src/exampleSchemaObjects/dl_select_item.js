import { userPropertiesLoggedIn } from "../schemas";
import { marketingObject } from "./marketing_object";

export const dl_select_item_schema_example = {
    event: "dl_select_item",
    event_id: "0446f7d6-070d-44e7-b355-06a27d0fc312",
    marketing: marketingObject,
    user_properties: userPropertiesLoggedIn,
    event_time: "2022-05-22T22:56:52.748Z",
    ecommerce: {
        currencyCode: "USD",
        click: {
            actionField: {
                list: "/collections/toys",
                action: "click",
            },
            products: [
                {
                    id: "5-TIPPY-TOP-WALNUT",
                    name: "Wooden Tippe Tops",
                    brand: "Mader Kreiselmanufaktur",
                    category: "Toys",
                    price: "12.0",
                    position: 5,
                    list: "/collections/toys",
                    product_id: "9229206160",
                    variant_id: "36638578960",
                },
            ],
        },
    },
};
