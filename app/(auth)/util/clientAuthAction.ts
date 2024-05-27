'use server'
import { IRESPONSE, TsignupSchema } from "@/types/types"
import { authAction } from "./authUtil"
import { NextResponse } from "next/server"




export const clientAuthActions = async (data: TsignupSchema, actionType: string): Promise<IRESPONSE> => {
    const authActionResponse = await authAction.authAction(data, actionType)
    return authActionResponse
}
