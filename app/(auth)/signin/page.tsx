
import { AuthForm } from "@/app/_design_system/ui/authFormUi/authForm"
import { clientAuthActions } from "../util/clientAuthAction"


function Authpage() {

    return (
        <div>
            <AuthForm formtype="/signin" key={'login'} submit={clientAuthActions} />
        </div>
    )
}

export default Authpage