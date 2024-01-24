import {makeAutoObservable} from "mobx";

export default class ThingsStore {
    constructor() {
        this._things = {}
        makeAutoObservable(this)
    }
    setThings(things) {
        this._things = things
    }
    get things() {
        return this._things
    }
}