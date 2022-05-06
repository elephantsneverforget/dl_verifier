import { userPropertiesLoggedIn } from "../schemas";
import { marketingObject } from "./marketing_object";

export const dl_add_to_cart_schema_example = {
    event: "dl_add_to_cart",
    event_id: "887cb1e5-27ea-47c3-95a3-fdca8299e719",
    marketing: marketingObject,
    user_properties: userPropertiesLoggedIn,
    ecommerce: {
        currencyCode: "USD",
        add: {
            actionField: {
                list: "/collections/puzzles",
                action: "add",
            },
            products: [
                {
                    id: "0A-CLUE-BOX",
                    name: "Clue Puzzle",
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
}
