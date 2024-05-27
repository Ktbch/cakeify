import { IRESPONSE, IUserAuthDETAILS, SendRequest } from "@/types/types"
import { sendRequest } from "./requestHandler"
import { createSessions } from "@/app/lib/sessions"
import { NextRequest } from "next/server"




interface IAuthRepsitory {
    authenticate(data: SendRequest, type: string): Promise<IRESPONSE>
}

export class AuthRepository implements IAuthRepsitory {
    async authenticate(data: SendRequest, type: string): Promise<IRESPONSE> {
        try {
            const response = await sendRequest(data, type)
            const result = await response.json()

            if (response.ok) {
                const userAuthDetails: IUserAuthDETAILS = result
                const storableSignedUser = JSON.stringify(userAuthDetails)
                return {
                    userData: userAuthDetails,
                    status: true,
                    message: result.message
                }
            } else {
                return {
                    status: false,
                    message: ` Validation Error : ${result.message}`
                }
            }
        } catch (error) {
            if (error instanceof TypeError && error.message === "fetch failed") {
                return {
                    status: false,
                    message: "Network error: Please check your internet connection"
                }
            } else {
                throw error
            }
        }

    }

    private authCreateSession(userAuthDetails: string): void {
        createSessions(userAuthDetails)
    }
}


export class AuthActions {
    private repository: IAuthRepsitory

    constructor(repository: IAuthRepsitory) {
        this.repository = repository
    }
    async authAction(data: SendRequest, type: string) {
        return this.repository.authenticate(data, type)
    }

}

const authRepository = new AuthRepository()
export const authAction = new AuthActions(authRepository)


