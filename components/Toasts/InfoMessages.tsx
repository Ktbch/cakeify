'use client'

import { useInfo } from "@/app/context/InfoMessage"
import { X } from "lucide-react"

export const InfoMessages = () => {
    const info = useInfo()
    return (
        <div>
            {info?.info?.message ?
                <div className="fixed top-[80%] left-[80%] text-[#FF6347] p-5 border border-[#8D6E63]  rounded-md bg-[#FFFFFF]">
                    <div className="relative ">
                        {info.info.message}
                        <X className="text-[#8D6E63] absolute bottom-[100%] left-[100%]" size={15} cursor={'pointer'} onClick={() => { info.setinfo(undefined) }} />
                    </div>
                </div> : ""}
        </div>
    )
}
