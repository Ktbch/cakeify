
'use client'
import { Loader, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction } from "react"
import { useGetProducts } from "../../hooks/useGetProducts"
import { useLogin } from "@/app/hooks/authHooks"


type TProductProps = {
    setShowLogin: () => void
}


export const Products = ({ setShowLogin }: TProductProps) => {

    //  fix loading state
    const { memorizedProduct, errMesssage, isLoading, infoMessage } = useGetProducts()



    const infoContainer = (
        <div className="fixed top-[400px] left-1/2 md:left-[80%]">
            <div className={`p-3 border ${errMesssage ? ' border-red-400' : 'border-yellow-400'} `}>
                <p className={`text-xs md:text-sm font-bold   ${errMesssage ? ' text-red-400' : 'text-yellow-400 tracking-wider'} `}>{errMesssage || infoMessage}</p>
            </div>
        </div>
    )


    const content = memorizedProduct && memorizedProduct.map((product) => (
        <div key={product.id} className=" border rounded-lg border-[#F5DEB3] w-auto container px-auto  py-5 bg-transparent bg-[#F5DEB3]" >
            <div className="flex flex-col items-start gap-10">
                <h5 className="text-sm font-normal">
                    {product.ProductName}
                </h5>
                <p>
                    {product.ProductReview}
                </p>
                <div className="flex flex-col items-end gap-5">
                    <div className=" flex  items-start gap-5">
                        <div className="text-xs">Quantity: {product.ProductQuantity}</div>
                        <div className="text-xs">Price: {product.ProductPrice}</div>
                        <div className="text-xs flex items-start">raiting:<Star size={15} /></div>
                    </div>
                    <Button size={'sm'} className="flex items-center gap-3 bg-[#FF6347] hover:bg-[#F5DEB3]" onClick={() => { setShowLogin() }}>Add To Cart <ShoppingCart size={15} className="-[#FFFDD0]" /></Button>
                </div>

            </div>

        </div >

    ))
    // handle error properly

    //  Todo look for a better way to do render this product list
    //  Todo for products not available figure out a better to implement the todo list
    return (
        memorizedProduct ? content
            :
            <>
                <div className="fixed top-[20%] left-1/2">
                    <Loader className="animate-spin" />
                </div>

                {errMesssage || infoMessage ? infoContainer : ""}
            </>
    )
}