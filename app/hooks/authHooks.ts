'use client'

import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { usePathname } from "next/navigation"
import { useInfo } from "../context/InfoMessage"

export const useStoreDataInLocalStorage = (accesToken: string) => {
    const storableUserDetails = JSON.stringify(accesToken)

    if (typeof window)
        localStorage.setItem('token', storableUserDetails)
    return
}

export const useGetStoredDataFromLocalStorage = (key: string) => {
    const [localStorageData, setLocalStorageData] = useState<string>()

    useEffect(() => {
        const data = localStorage.getItem(key)
        setLocalStorageData(data!)
    }, [])
    return localStorageData

}

export const useRemoveStoredDataFromLocalStorage = (key: string, token: string | undefined) => {
    useEffect(() => {
        localStorage.removeItem(key)
    }, [token])
}


export const useLogin = () => {
    const [login, setLogin] = useState<boolean>()
    const authContext = useAuth()
    const authorized = authContext?.authorized

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    }, [authorized])

    return login
}

export const useLogout = () => {
    const login = useLogin()
    const authContext = useAuth()
    const pathName = usePathname()
    const info = useInfo()

    const handleLogout = () => {
        authContext?.LogoutUser()
        info?.setinfo({ message: 'Logout Succesful', type: 'info' })
        setTimeout(() => {
            info?.setinfo(undefined)
        }, 5000)
    }

    return { login, pathName, handleLogout }
}

