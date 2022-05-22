import { userPropertiesLoggedIn } from "../schemas";
import { marketingObject } from "./marketing_object";

export const dl_remove_from_cart_schema_example = {
    event: "dl_remove_from_cart",
    event_id: "07df1ccc-7a89-4be2-a863-b0a238080280",
    marketing: marketingObject,
    event_time: "2022-05-22T22:56:52.748Z",
    user_properties: userPropertiesLoggedIn,
    ecommerce: {
        currencyCode: "USD",
        remove: {
            actionField: {
                list: "/collections/puzzles",
            },
            products: [
                {
                    id: "0A-CLUE-BOX",
                    name: "Cluebox",
                    brand: "iDVENTURE",
                    category: "Puzzles",
                    variant: "Clue puzzle size large",
                    price: "40",
                    quantity: "1",
                    list: "/collections/puzzles",
                    product_id: "5074792185993",
                    variant_id: "33922510782601",
                    image: "https://cdn.shopify.com/s/files/1/0200/7616/products/Cluebox-1_098a06ca-1389-46cc-b34e-ec85c86e99df.png?v=1636419558",
                },
            ],
        },
    },
};