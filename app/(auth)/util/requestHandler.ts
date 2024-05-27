import { SendRequest } from "@/types/types"


// Todo imporve this sendRequest function to be able to send all kind of requests

export const sendRequest = async ({ email, password, isSubAdmin = false }: SendRequest, type: string) => {
    try {
        const requestUrl = type === '/signup' ? process.env.AUTH_URL_SIGNUP : process.env.AUTH_URL_SIGNIN
        const response = await fetch(requestUrl!, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, isSubAdmin })
        })

        return response


    } catch (error) {
        throw error
    }

}