import { TProductType } from "@/types/types"
import { Dispatch, SetStateAction } from "react"
import { getProductsFromDataBase } from "./getProductsFromDatabse"

export type TGetProductsParams = {
    setProducts: Dispatch<SetStateAction<TProductType[] | null>>
    setErrMessage: Dispatch<SetStateAction<string | undefined>>
    setInfoMessage: Dispatch<SetStateAction<string | undefined>>
    setLoading: Dispatch<SetStateAction<boolean | undefined>>
    signal: AbortSignal
}


export const getProducts = async ({ signal, setProducts, setErrMessage, setInfoMessage, setLoading }: TGetProductsParams, attempt = 1) => {
    try {
        const response = await getProductsFromDataBase()
        setLoading(true)
        if (response.status) {
            const products = response.data
            setProducts(products)
            setErrMessage('')
            return
        } else {
            setLoading(true)
            if (attempt <= 3) {
                setInfoMessage("Bad Network retrying.... ")
                setTimeout(() => { getProducts({ signal, setProducts, setErrMessage, setInfoMessage, setLoading }, attempt + 1) }, 2000)
            } else {
                setErrMessage(response.message)
            }
            return
        }
    } catch (error) {
        throw error
    } finally {
        setLoading(false)
    }
}