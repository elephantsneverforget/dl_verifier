import { marketingObject } from "./marketing_object";

export const dl_view_item_schema_example = {
    event: "dl_view_item",
    event_id: "231f2c91-c2f3-421f-9d20-bb46a956e87a",
    marketing: marketingObject,
    ecommerce: {
        currencyCode: "USD",
        detail: {
            actionField: {
                list: "/collections/games",
                action: "detail",
            },
            products: [
                {
                    id: "CHESS-SET", // SKU
                    name: "Gold Chess Set",
                    brand: "Chess Inc.",
                    category: "Games",
                    variant: "Large Board",
                    price: "199.00",
                    list: "/collections/games",
                    product_id: "7112843886744",
                    variant_id: "41275778367640",
                    compare_at_price: "0.0",
                    image: "//cdn.shopify.com/s/files/1/0200/7616/products/arena-concrete-chess-set_f75103a8-2ecc-4d91-8d6c-d80b2501dbd7.png?v=1636459884",
                    inventory: "20",
                },
            ],
        },
    },
};
