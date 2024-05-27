'use client'

import { useAuth } from "@/app/context/AuthContext"
import { ReactNode, useEffect, useState } from "react"


type TGetAccessTokenFromLocalStorage = {
    children: ReactNode
}

export const GetAccesstokenFromLocalStroage = ({ children }: TGetAccessTokenFromLocalStorage) => {
    const [isLogin, setIsLogin] = useState<boolean>()
    const authContext = useAuth()

    useEffect(() => {
        authContext?.checkStatusOfUserIfStillLoggedin()
    }, [])
    return (
        <div>
            {children}
        </div>
    )
}
