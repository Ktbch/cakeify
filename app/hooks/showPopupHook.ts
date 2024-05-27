import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext"

export const useShowPopup = () => {
    const authcontext = useAuth()
    const [showLogin, setShowLogin] = useState<boolean>()
    const route = useRouter()

    //  check if the abstraction of this is necessary

    const handlSowAuthFormPopup = () => {
        if (authcontext?.authorized) {
            route.push('/order')
            return
        } else {
            setShowLogin(true)
        }
    }

    useEffect(() => {
        if (authcontext?.authorized) {
            setShowLogin(false)
        }
    }, [authcontext?.authorized])


    return { showLogin, setShowLogin, handlSowAuthFormPopup }
}

