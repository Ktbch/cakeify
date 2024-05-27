import { TProductType } from "@/types/types"
import { useEffect, useMemo, useState } from "react"
import { TGetProductsParams, getProducts } from "../Products/utils/getProducts"




export const useGetProducts = () => {
    const [products, setProducts] = useState<TProductType[] | null>(null)
    const [errMesssage, setErrMessage] = useState<string>()
    const [infoMessage, setInfoMessage] = useState<string>()
    const [isLoading, setLoading] = useState<boolean>()

    const controller = new AbortController()
    const signal = controller.signal

    const getProductsParams: TGetProductsParams =
    {
        setProducts,
        setErrMessage,
        setInfoMessage,
        setLoading,
        signal
    }

    useEffect(() => {
        getProducts(getProductsParams)
        return () => {
            controller.abort()
        }
    }, [])

    const memorizedProduct = useMemo(() => {
        if (!products) return
        return products
    }, [products])
    return { memorizedProduct, errMesssage, isLoading, infoMessage }
}