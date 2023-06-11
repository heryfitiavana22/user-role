"use client"
import { HTMLInputTypeAttribute, useState } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"

export function CustomInput<T extends FieldValues>({
    label,
    placeholder,
    type,
    register,
    name,
    required = false,
    defaultValue,
}: CustomInputProps<T>) {
    const [show, setShow] = useState(false)

    return (
        <div className="form-control w-full max-w-xs">
            {label && (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className="input input-bordered w-full max-w-xs"
                defaultValue={defaultValue}
                {...register(name, { required })}
            />
        </div>
    )
}

type CustomInputProps<T extends FieldValues> = {
    label?: string
    placeholder?: string
    type?: HTMLInputTypeAttribute
    register: UseFormRegister<T>
    name: Path<T>
    required?: boolean
    defaultValue?: string
}
