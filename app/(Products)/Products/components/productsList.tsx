'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { Products } from './Product'


type TProductListProps = {
    setShowLogin: () => void
    showLogin: boolean | undefined
}

export const ProductsList = ({ setShowLogin, showLogin }: TProductListProps) => {
    return (
        <div className={` ${showLogin ? 'blur-md' : 'blur-none'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-10 pt-10 transition-all duration-100 ease-in-out`}>
            <Products setShowLogin={setShowLogin} />
        </div >
    )
}

