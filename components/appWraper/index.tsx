'use client'

import { AuthProvider } from "@/app/context/AuthContext"
import NavBar from "../navBar/NavBar"
import { InfoMessageProvider } from "@/app/context/InfoMessage"
import { InfoMessages } from "../Toasts/InfoMessages"
import { TChildrenProps } from "@/types/types"


export const AppWrapper = ({ children }: TChildrenProps) => {
    return (
        <AuthProvider>
            <InfoMessageProvider>
                <div>
                    <NavBar />
                    {children}
                    <InfoMessages />
                </div>
            </InfoMessageProvider>
        </AuthProvider>
    )
}