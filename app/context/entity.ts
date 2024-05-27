
import { IUserAuthDETAILS } from "@/types/types"

export class User {
    userDetails!: IUserAuthDETAILS
    authorized!: boolean

    constructor() {
        this.authorized = false
    }

    getUserinfo(userDetails: IUserAuthDETAILS | undefined) {
        if (userDetails) {
            this.authorized = true
            this.userDetails = userDetails
            return { userDetails: this.userDetails, authorized: this.authorized }
        } else {
            return 'no user found'
        }
    }

    getUserDetails() {
        if (!this.userDetails) return
        return this.userDetails.newUser
    }

    getAccesstoken() {
        if (!this.userDetails) return
        return this.userDetails.accesToken
    }

    checkIfUserisAdmin() {
        if (!this.userDetails) return
        const { newUser: { isSubAdmin } } = this.userDetails
        if (isSubAdmin) return isSubAdmin
        return isSubAdmin
    }

    checkIfUserIsAuthorized() {
        if (this.authorized) return this.authorized
        return this.authorized
    }
}

export const user = new User()