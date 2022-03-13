/**
 * @jest-environment jsdom
 */
import { DB } from './db.js';
import { eventList } from './eventList.js'

describe("db retrieves and stores objects", () => {
    test("A newly created db object has all dl events set to a value of 2.", () => {
        const db = new DB();
        expect(Object.keys(db.getDB().events).length).toBe(12);
        eventList.forEach((event) => expect(db.getDB().events[event]).toBe(2))
    });
    test("Setting a event validity value in the db changes the local storage object", () => {
        const db = new DB();
        db.setEventValidityProperty("dl_add_to_cart", 1);
        expect(db.getDB().events["dl_add_to_cart"]).toBe(1);
    });
    // test("Setting a script loaded flag in the db changes the local storage object", () => {
    //     const db = new DB();
    //     db.setScriptLoadStatus("gtmLoaded", true);
    //     expect(db.getDB().scriptLoads["gtmLoaded"]).toBe(true);
    // });
    test("Can only create one instance of the DB", () => {
        const db = new DB();
        const db_second = new DB();
        expect(db).toEqual(db_second);
    }); 
    test("The clear method resets the DB", () => {
        const db = new DB();
        db.setEventValidityProperty("dl_add_to_cart", 1);
        // db.setScriptLoadStatus("gtmLoaded", true);
        db.clear();
        expect(Object.keys(db.getDB().events).length).toBe(12);
        eventList.forEach((event) => expect(db.getDB().events[event]).toBe(2))
        // expect(db.getDB().scriptLoads["gtmLoaded"]).toBe(false);
    });  
});