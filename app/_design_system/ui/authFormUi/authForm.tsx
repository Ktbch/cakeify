'use client'

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TsignupSchema, IRESPONSE } from "@/types/types";
import FormInput from "../../components/form/FormInput";
import FormContent from "../../components/form/FormContent";
import FormResponse from "../../components/form/Response";
import { useAuthFormSettings } from "@/app/hooks/formHooks";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";


export type AuthFormProps = {
    formtype: string
    submit: (value: TsignupSchema, value2: string) => Promise<IRESPONSE>
}


export function AuthForm({ formtype, submit }: AuthFormProps) {
    const { handleSubmit, onSubmit, setResponse, ...rest } = useAuthFormSettings({ formtype, submit })


    return (
        <Card className=" relative w-full px-10 py-10 flex flex-col items-center ">
            <CardHeader className="pb-10" >
                <h3 className="text-center rounded-md border-b-2 capitalize">{formtype.split('/')}</h3>
            </CardHeader>
            <CardTitle>
                <FormResponse response={rest.response} setResponse={setResponse} />
            </CardTitle>
            <FormContent isLoading={rest.isLoading} handleSubmit={handleSubmit} onSubmit={onSubmit}>
                <FormInput  {...rest} name="email" type="email" />
                <FormInput {...rest} name="password" type="password" />
                {formtype === '/signup' ? <FormInput {...rest} name="Address" type="text" /> : ''}
            </FormContent>
        </Card>
    )
}

