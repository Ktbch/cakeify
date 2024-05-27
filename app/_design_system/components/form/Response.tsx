import { IRESPONSE } from "@/types/types"
import { InfoIcon, X } from "lucide-react"
import { Dispatch, SetStateAction } from "react"


type TFormResponse = {
    response: IRESPONSE | undefined
    setResponse: Dispatch<SetStateAction<IRESPONSE | undefined>>
}

export default function FormResponse({ response, setResponse }: TFormResponse) {
    const res = (response ? (<div className={` fixed top-[-1px] right-[0.3%] w-full gap-5 ${!response.status ? 'bg-red-100' : "bg-green-200"} cursor-pointer p-3 rounded-md text-center backdrop-blur-md`}>
        <div className="text-xs capitalize tracking-tight">
            <div className="flex  items-center gap-1">
                <InfoIcon size={20} className={`${!response.status ? 'text-red-900' : 'text-green-900'}`} />
                <span className={`${!response.status ? 'text-red-900' : 'text-green-900'}`}>{response.message}</span>
            </div>

            <span className="absolute top-1 right-2">
                <X size={13} cursor={'pointer'} onClick={() => { setResponse(undefined) }} />
            </span>

        </div>
    </div>)
        :
        '')

    return res

}
