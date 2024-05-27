'use client'

import { IRESPONSE, TsignupSchema, signupSchema, loginSchema } from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AuthFormProps } from "../_design_system/ui/authFormUi/authForm"
import { useAuth } from "../context/AuthContext"
import { useInfo } from "../context/InfoMessage"
import { submitLogic } from "./hookLogic/submitLogic"


export const useAuthFormSettings = (authSettingsParam: AuthFormProps) => {
    const [response, setResponse] = useState<IRESPONSE>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const authContext = useAuth()
    const route = useRouter()
    const info = useInfo()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TsignupSchema>({ resolver: zodResolver(authSettingsParam.formtype === "/signup" ? signupSchema : loginSchema) })


    const authSettingsObj =
    {
        setResponse,
        setIsLoading,
        route,
        authSettingsParam,
        authContext,
        info
    }

    const onSubmit: SubmitHandler<TsignupSchema> = async (data) => await submitLogic({ ...authSettingsObj, data })

    return { response, isLoading, onSubmit, register, errors, handleSubmit, setResponse }
}