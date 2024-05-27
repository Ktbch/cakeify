

// export const useErrors = () => {
//      [error, s]
// }

import { TInfoMessageType } from "@/types/types"
import { useState } from "react"




export const useInfoMessage = () => {
     const [infoMessage, setInforMessage] = useState<TInfoMessageType>()

     const initailazeSetInfoMessage = (infoMessageParams: TInfoMessageType | undefined) => {
          setInforMessage(infoMessageParams)
          return
     }


     return { initailazeSetInfoMessage, infoMessage }
}
