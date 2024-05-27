import 'server-only'
import { cookies } from 'next/headers'
import { NextApiRequest } from 'next'




//  look for a better way to fix this function
export const createSessions = (accessToken: string) => {
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    cookies().set('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/'
    })
    return true

}

export const deleteSessions = () => {
    cookies().delete('accessToken')
    return true
}

export const getSessions = () => {
    const fetchedsessions = cookies().get('accessToken')
    return fetchedsessions
}