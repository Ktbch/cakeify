"use client"

import React, { ReactNode } from 'react'
import { AuthProvider } from '../context/AuthContext'
import { UserAuthVerification } from './components/UserAuthVerification'

type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <UserAuthVerification>
            <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {children}
            </div>
        </UserAuthVerification>
    )
}

export default Layout
