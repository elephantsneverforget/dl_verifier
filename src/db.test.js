/**
 * @jest-environment jsdom
 */
import { DB } from './db.js';
import { eventList } from './eventList.js'

describe("db retrieves and stores objects", () => {
    test("A newly created db object has all dl events set to a value of 2.", () => {
        const db = new DB();
        expect(Object.keys(db.getDB()).length).toBe(12);
        eventList.forEach((event) => expect(db.getDB()[event]).toBe(2))
    });
    test("Setting a value of a property in the db changes the local storage object", () => {
        const db = new DB();
        db.setProperty("dl_add_to_cart", 1);
        expect(db.getDB()["dl_add_to_cart"]).toBe(1);
    });
    test("Can only create one instance of the DB", () => {
        const db = new DB();
        const db_second = new DB();
        expect(db).toEqual(db_second);
    }); 
});