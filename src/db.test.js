/**
 * @jest-environment jsdom
 */
import { DB } from './db.js';
import { eventList } from './eventList.js'

describe("db retrieves and stores objects", () => {
    test("A newly created db object has all dl events set to a value of 'unseen'.", () => {
        const db = new DB();
        expect(Object.keys(db.getDB().events).length).toBe(12);
        eventList.forEach((event) => expect(db.getDB().events[event].eventVerificationStatus).toBe("unseen"))
    });
    test("Setting a event validity value in the db changes the local storage object", () => {
        const db = new DB();
        db.setEventValidityProperty("dl_add_to_cart", {
            eventVerificationStatus: "verified",
            isMissingUserData: "undetermined",
        });
        expect(db.getDB().events["dl_add_to_cart"].eventVerificationStatus).toBe("verified");
        expect(db.getDB().events["dl_add_to_cart"].isMissingUserData).toBe("undetermined");
    });
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
        eventList.forEach((event) => expect(db.getDB().events[event].eventVerificationStatus).toBe("unseen"))
        // expect(db.getDB().scriptLoads["gtmLoaded"]).toBe(false);
    });  
});