'use client'

import { TIntialState } from "@/types/types";
import { ReactNode, createContext, useContext, useState } from "react";
import { useGetStoredDataFromLocalStorage, useRemoveStoredDataFromLocalStorage, useStoreDataInLocalStorage } from "../hooks/authHooks";



type TUseAuthProvider = {
    children: ReactNode
}

const AuthContext = createContext<TIntialState | undefined>(undefined)

//  Todo clean up this function

export const AuthProvider = ({ children }: TUseAuthProvider) => {

    // const [userDetails, setUserDetails] = useState<IUserAuthDETAILS>()
    const [accessToken, setAccessToken] = useState<string>()
    const [authorized, setAuthorized] = useState<boolean>(false)


    const storeUserDataInLocalStorage = useStoreDataInLocalStorage
    const userDataStoredLocalstorageData = useGetStoredDataFromLocalStorage('token')
    const clearUserStoredLocalStorageData = useRemoveStoredDataFromLocalStorage


    const LoginUser = (accessToken: string) => {
        storeUserDataInLocalStorage(accessToken)
        setAccessToken(accessToken)
        setAuthorized(true)
    }

    const checkStatusOfUserIfStillLoggedin = () => {
        const token = localStorage.getItem('token')
        if (token) {
            setAccessToken(userDataStoredLocalstorageData)
            setAuthorized(true)
            return true
        } else {
            setAuthorized(false)
            return false
        }
    }

    //  i would get the use from the database from the auth token

    // const getUserDetails = () => {
    //     if (userDetails) {
    //         return { userDetails, authorized }
    //     }
    //     return
    // }

    const LogoutUser = () => {
        setAccessToken('')
        setAuthorized(false)
        localStorage.removeItem('token')
    }
    const value: TIntialState = {
        LoginUser,
        checkStatusOfUserIfStillLoggedin: checkStatusOfUserIfStillLoggedin,
        // getUserDetails,
        LogoutUser,
        accessToken,
        authorized
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}