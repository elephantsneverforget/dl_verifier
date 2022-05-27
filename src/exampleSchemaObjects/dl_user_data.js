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
    ecommerce: {
        cart_contents: {
            products: [{
                id: "LB00161-34689553170476", // SKU
                name: "Lovebox Original Color & Photo", // Product title
                brand: "Lovebox INC",
                category: "Home,Living,Art & Objects,Tabletop",
                variant: "USA wall plug",
                price: "119.99",
                quantity: "1",
                list: "/art/wallhangings", // The list the product was discovered from or is displayed in
                product_id: "6979886940352", // The product_id
                variant_id: "41141193965760", // id or variant_id
                compare_at_price: "139.99", // If available on dl_view_item & dl_add_to_cart otherwise use an empty string
                image: "//cdn.shopify.com/small.png", // If available, otherwise use an empty string
                inventory: "5", // If available, only required on dl_view_item
            }],
        },
        currency_code: "USD",
    },
};
