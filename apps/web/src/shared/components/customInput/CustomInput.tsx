"use client"
import classNames from "classnames"
import { HTMLInputTypeAttribute, useState } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"
import { Eye, EyeSlash } from "../icons"

export function CustomInput<T extends FieldValues>({
    label,
    placeholder,
    type,
    register,
    name,
    required = false,
    defaultValue,
    classNameInput,
}: CustomInputProps<T>) {
    const [showPassword, setShowPassword] = useState(true)
    const inputType =
        type == "password" ? (showPassword ? "password" : "text") : type

    return (
        <div className="relative form-control w-full max-w-xs">
            {label && (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            )}
            <input
                type={inputType}
                placeholder={placeholder}
                className={classNames(
                    "input input-bordered w-full max-w-xs",
                    classNameInput
                )}
                defaultValue={defaultValue}
                {...register(name, { required })}
            />
            {type == "password" && (
                <span
                    className="absolute bottom-3 right-2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeSlash /> : <Eye />}
                </span>
            )}
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
    classNameInput?: string
}
