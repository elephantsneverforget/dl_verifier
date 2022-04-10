// Polling here because overriding the push method on window.dataLayer caused issuese in GTM preview mode
import { eventList } from "./eventList.js"
export class DB {
    constructor() {
        if (DB._instance) return DB._instance;
        DB._instance = this; 
        this._dbName = "_verifier_db";
        this._eventList = eventList;
        this._initDB();

    }

    getDB() {
        return JSON.parse(window.localStorage.getItem(this._dbName));
    }

    _initDB() {
        const initialDB = {
            events: {},
        }
        // 2 = unseen // 1 = valid // 0 = invalid all start at 2
        eventList.forEach((item) => initialDB.events[item] = "unseen");
        if (!window.localStorage.getItem(this._dbName)) {
            window.localStorage.setItem(
                this._dbName,
                JSON.stringify(initialDB)
            );
        }
    }

    setEventValidityProperty(property, value) {
        const currentDB = this.getDB()
        currentDB.events[property] = value;
        window.localStorage.setItem(
            this._dbName,
            JSON.stringify(currentDB)
        );
    }

    clear() {
        const initialDB = {
            events: {},
        }
        eventList.forEach((item) => initialDB.events[item] = "unseen");
        window.localStorage.setItem(
            this._dbName,
            JSON.stringify(initialDB)
        );
    }
}