import { AuthFormProps } from '@/app/_design_system/ui/authFormUi/authForm'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email Adress' }),
    password: z.string().min(3, { message: "Password Must  not be less Than (3) charcters" }).max(8, { message: "Password Must not be greater Than (8) characters " })
})

export const signupSchema = z.object({
    // fullname: z.string().min(3, { message: 'Full name must be greater than (3) charcters ' }),
    email: z.string().email({ message: 'Invalid email Adress' }),
    password: z.string().min(3, { message: "Password Must  not be less Than (3) charcters" }).max(8, { message: "Password Must not be greater Than (8) characters " }),
    Address: z.string().min(1, { message: 'Adress must aleast be two digits' })
})


export type IUserAuthDETAILS = {
    newUser: {
        id: number,
        email: string,
        password: string,
        isSubAdmin: boolean,
    },
    authoriazationToken: string
}

export type TtodoList = {
    id?: number
    todo: string
}

export type SendRequest = {
    email: string
    password: string
    isSubAdmin?: boolean
}


export type IRESPONSE = {
    userData?: IUserAuthDETAILS
    status: boolean,
    message: string
}

export type TProductType = {

    id: number
    ProductName: string
    ProductRating: number,
    ProductQuantity: number,
    ProductPrice: number,
    ProductReview: string,
    createdAt: string,
    updatedAt: string

}

export type TIntialState = {
    checkStatusOfUserIfStillLoggedin: () => boolean
    LoginUser: (value: string) => void
    getUserDetails?: () => {
        userDetails: IUserAuthDETAILS;
        authorized: boolean;
    } | undefined
    LogoutUser: () => void
    accessToken: string | undefined
    authorized: boolean
}

export type TInfoMessageType = {
    message: string
    type: string
}

export type TInfoContext = {
    info: TInfoMessageType | undefined
    setinfo: Dispatch<SetStateAction<TInfoMessageType | undefined>>
}


export type TChildrenProps = {
    children: ReactNode
}

export type TSubmitLogicParams = {
    setResponse: Dispatch<SetStateAction<IRESPONSE | undefined>>
    setIsLoading: Dispatch<SetStateAction<boolean>>
    authSettingsParam: AuthFormProps
    route: AppRouterInstance
    authContext: TIntialState | undefined
    data: TsignupSchema
    info: TInfoContext | undefined
}

export type TloginSchema = z.infer<typeof loginSchema>
export type TsignupSchema = z.infer<typeof signupSchema>