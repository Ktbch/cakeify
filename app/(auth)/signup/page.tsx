
import { AuthForm } from "@/app/_design_system/ui/authFormUi/authForm"
import { clientAuthActions } from "../util/clientAuthAction"


function SignUpPage() {

    return (
        <div>
            <AuthForm formtype="/signup" key={'signup'} submit={clientAuthActions} />
        </div>
    )
}

export default SignUpPage