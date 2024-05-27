import { ProductsVerifyAuthPopup } from "./components/productsVerifyAuthPopup";
import { ShowAuthFormPopupt } from "./components/showAuthformPopup";


export default function ProductsPage() {

    return (
        <>
            <ShowAuthFormPopupt>
                <ProductsVerifyAuthPopup />
            </ShowAuthFormPopupt>
        </>
    )
}
