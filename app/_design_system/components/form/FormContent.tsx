import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card"
import { TsignupSchema } from "@/types/types";
import { Loader } from "lucide-react";
import { ReactNode } from "react";
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";


type TFormConetent = {
    handleSubmit: UseFormHandleSubmit<TsignupSchema, undefined>
    onSubmit: SubmitHandler<TsignupSchema>
    children: ReactNode
    isLoading: boolean
}

export default function FormContent({ handleSubmit, onSubmit, children, isLoading }: TFormConetent) {
    return (
        <CardContent>
            <form onSubmit={handleSubmit(async (data) => {
                await onSubmit(data)
            })}>
                <div className="grid grid-cols-1 content-start gap-10 ">
                    {children}
                    <Button type='submit' disabled={isLoading} className="w-full">{isLoading ? <Loader className="animate-spin" /> : 'submit'}</Button>
                </div>
            </form>
        </CardContent >

    )
}
