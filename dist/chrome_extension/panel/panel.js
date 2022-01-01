// import { h, Component, render } from 'https://unpkg.com/preact?module';
// import htm from 'https://unpkg.com/htm?module';
import { h, Component, render } from "./preact.js";
import htm from "./preact_htm.js";
// Initialize htm with Preact
// DevTools page -- devtools.js
// Create a connection to the background page
// Create a connection to the background page

const html = htm.bind(h);
const eventList = [
    "dl_add_to_cart",
    "dl_begin_checkout",
    "dl_login",
    "dl_remove_from_cart",
    "dl_search_results",
    "dl_select_item",
    "dl_sign_up",
    "dl_user_data",
    "dl_view_cart",
    "dl_view_item_list",
    "dl_view_item",
];

function App(props) {
    return html` <table id="popup">
        <tr>
            <th>Event</th>
            <th>Status</th>
        </tr>
        ${eventList.map(
            (event) => html`
                <tr>
                    <td>
                        <div>${event}</div>
                    </td>
                    <td>
                        <div>${event}</div>
                    </td>
                </tr>
            `
        )}
    </table>`;
}

function doRender() {
    console.log("doRender")
    render(html`<${App} name="World" eventList="{eventList}" />`, document.body);
}

doRender();
