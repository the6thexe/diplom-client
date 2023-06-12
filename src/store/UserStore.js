import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isOpenBar = false
        this._user = {}
        this._role = 'admin'
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setIsOpenBar(bool) {
        this._isOpenBar = bool
    }


    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    setRole(role) {
        this._role = role
    }

    get role() {
        return this._role
    }
}