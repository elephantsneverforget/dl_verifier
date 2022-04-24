import { marketingObject } from "./marketing_object";

export const dl_view_item_list_schema_example = {
    event: "dl_view_item_list",
    event_id: "2b0c5796-7abe-4465-8e24-0ffade4699df",
    marketing: marketingObject,
    ecommerce: {
        currencyCode: "USD",
        impressions: [
            {
                id: "4-AUDUBON-BIRDCALL",
                name: "Audubon Bird Call",
                brand: "American Bird Products, Inc.",
                category: "Toys",
                price: "8.0",
                position: 9,
                list: "/collections/toys",
                product_id: "4400067903625",
                variant_id: "31410300551305",
            },
            {
                id: "5-FLIPBOOK-KIT-BLANK",
                name: "FlipBooKit",
                brand: "Art of Play",
                category: "Toys",
                price: "35.0",
                position: 10,
                list: "/collections/toys",
                product_id: "7846286032",
                variant_id: "41275883683992",
            },
            {
                id: "5-MYSTERY-TOP",
                name: "Mystery Top",
                brand: "Art of Play",
                category: "Toys",
                price: "12.0",
                position: 11,
                list: "/collections/toys",
                product_id: "1856914849850",
                variant_id: "18298859880506",
            }
        ],
    },
};
