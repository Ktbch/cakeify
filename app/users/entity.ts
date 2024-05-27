'use client'

import { IUserAuthDETAILS } from "@/types/types";
import { getSessions } from "../lib/sessions";

//  look more on this
class Users {
    userDetails: IUserAuthDETAILS | undefined

    constructor() {
        this.userDetails = this.getUserDetailsFromLocalStorage()
    }

    getUserEmail() {
        return this.userDetails?.newUser.email
    }

    getUserAuthorizarionToken() {
        return this.userDetails?.accesToken
    }

    storeUserDetailsInLocalStorage(userDetails: string) {
        try {
            localStorage.setItem("userDetails", userDetails)
        } catch (error) {

        }
    }

    private getUserDetailsFromLocalStorage() {
        try {
            const storedData = localStorage.getItem("userDetails")
            const userDetailsObj = JSON.parse(storedData!)
            return userDetailsObj
        } catch (error) {
            throw error
        }

    }
}

export const user = new Users()