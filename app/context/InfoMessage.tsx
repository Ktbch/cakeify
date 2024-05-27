import { TChildrenProps, TInfoContext, TInfoMessageType } from "@/types/types";
import { createContext, useContext, useState } from "react";





const infoContext = createContext<TInfoContext | undefined>(undefined)


export const InfoMessageProvider = ({ children }: TChildrenProps) => {

    const [info, setinfo] = useState<TInfoMessageType>()

    const value = {
        info,
        setinfo
    }

    return (
        <infoContext.Provider value={value}>
            {children}
        </infoContext.Provider>
    )
}

export const useInfo = () => {
    return useContext(infoContext)
}