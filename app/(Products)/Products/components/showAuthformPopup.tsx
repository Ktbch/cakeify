'use client'
import { X } from "lucide-react"
import { ProductsList } from "./productsList"
import { TChildrenProps } from "@/types/types"
import { useShowPopup } from "@/app/hooks/showPopupHook"


export const ShowAuthFormPopupt = ({ children }: TChildrenProps) => {
    const { handlSowAuthFormPopup, setShowLogin, showLogin } = useShowPopup()

    return (
        <>
            <ProductsList setShowLogin={handlSowAuthFormPopup} showLogin={showLogin} />
            <div className={`absolute ${showLogin ? '-translate-y-0' : '-translate-y-[150%]'} top-[15%] left-[40%] transition-all duration-100 ease-in-out`}>
                {children}
                <div className="absolute top-5 left-[85%]">
                    <X className="cursor-pointer" onClick={() => { setShowLogin(false) }} />
                </div>
            </div>
        </>
    )

}