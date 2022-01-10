// Polling here because overriding the push method on window.dataLayer caused issuese in GTM preview mode
import { eventList } from "./eventList.js"
export class DB {
    constructor() {
        if (DB._instance) return DB._instance;
        DB._instance = this; 
        this._dbName = "_verifier_db";
        this._eventList = eventList;
        this._initDB();
        // 2 = unseen // 1 = valid // 0 = invalid all start at 2

    }

    getDB() {
        return JSON.parse(window.localStorage.getItem(this._dbName));
    }

    _initDB() {
        const initialDB = {}
        eventList.forEach((item) => initialDB[item] = 2);
        if (!window.localStorage.getItem(this._dbName)) {
            window.localStorage.setItem(
                this._dbName,
                JSON.stringify(initialDB)
            );
        }
    }

    setProperty(property, value) {
        const currentDB = this.getDB()
        const newDB = Object.assign(currentDB, {[property]: value})
        window.localStorage.setItem(
            this._dbName,
            JSON.stringify(newDB)
        );
    }

    clear() {
        // eslint-disable-next-line no-undef
        const initialDB = {}
        eventList.forEach((item) => initialDB[item] = 2);
        window.localStorage.setItem(
            this._dbName,
            JSON.stringify(initialDB)
        );

    }
}