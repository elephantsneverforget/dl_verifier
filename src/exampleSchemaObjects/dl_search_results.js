import { userPropertiesLoggedIn } from "../schemas";
import { marketingObject } from "./marketing_object";
marketingObject
export const dl_search_results_schema_example = {
    event: "dl_search_results",
    event_id: "ee8eb7ca-8db2-4cc6-b875-2398b66b8ffe",
    marketing: marketingObject,
    user_properties: userPropertiesLoggedIn,
    ecommerce: {
        currencyCode: "USD",
        actionField: {
            list: "search results",
        },
        impressions: [
            {
                id: "4-AUDUBON-BIRDCALL",
                name: "Audubon Bird Call",
                brand: "American Bird Products, Inc.",
                category: "Toys",
                price: "8.0",
                position: 0,
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
                position: 2,
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
                position: 3,
                list: "/collections/toys",
                product_id: "1856914849850",
                variant_id: "18298859880506",
            }
        ],
    },
};
