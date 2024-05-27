'use client'

import { useAuth } from "@/app/context/AuthContext"
import { TChildrenProps } from "@/types/types"
import { useRouter } from "next/navigation"
import { useEffect, } from "react"




export const UserAuthVerification = ({ children }: TChildrenProps) => {
    const authContext = useAuth()
    const route = useRouter()


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (authContext?.checkStatusOfUserIfStillLoggedin()) {
            route.push('/')
        }
    }, [])
    return (
        <div>
            {children}
        </div>
    )
}

