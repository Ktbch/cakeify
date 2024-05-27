

import { clientAuthActions } from "@/app/(auth)/util/clientAuthAction"
import { AuthForm } from "@/app/_design_system/ui/authFormUi/authForm"




export const ProductsVerifyAuthPopup = () => {
    return (
        <div>
            <AuthForm formtype="signin" submit={clientAuthActions} />
        </div>
    )
}