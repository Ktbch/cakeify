'use client'

export class LocalStorageAuthorizationTokenHandler {
    authoriazationToken: string | undefined
    authoriaztionTokenKey: string

    constructor() {
        this.authoriaztionTokenKey = 'token'
    }

    storeAuthorizationTokenInLocalStorage(value: string) {
        try {

            localStorage.setItem(this.authoriaztionTokenKey, value)
            return true
        } catch (error) {
            throw error
        }
    }

    getAuthorizationTokenFromLocalStorage() {
        this.authoriazationToken = JSON.stringify(localStorage.getItem(this.authoriaztionTokenKey))
        return this.authoriazationToken
    }

    deleteAuthorizationTokenFromLocalStorage() {
        localStorage.removeItem(this.authoriaztionTokenKey)
        return true
    }

    clearLocalStorage() {
        localStorage.clear()
    }
}



