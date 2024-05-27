import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TsignupSchema } from "@/types/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";



type TFormInputProps = {
    name: "password" | "email" | "Address"
    register: UseFormRegister<TsignupSchema>
    errors: FieldErrors<TsignupSchema>
    isLoading: boolean
    type: string
}


export default function FormInput(FormProps: TFormInputProps) {
    const { name, register, errors, type, isLoading } = FormProps
    return (
        <div className="relative grid grid-cols-1 justify-items-start gap-5">
            <Label>{name}:</Label>
            <Input type={type} placeholder={name} {...register(name)} className={` outline-none ${errors[name] ? 'border-red-200 outline-red-300' : ""}    `} disabled={isLoading} />
            {errors[name] ? <span className=" absolute  \text-red-500 top-20 text-xs">{errors[name]?.message}</span> : ''}
        </div>
    )
}
