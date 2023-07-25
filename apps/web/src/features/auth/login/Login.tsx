"use client"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useLogin } from "./hooks"
import { Button, CustomInput, H3, Loading } from "@/shared"

export type LoginValue = {
    email: string
    password: string
}

export function Login({}: LoginProps) {
    const { register, handleSubmit } = useForm<LoginValue>()
    const { message, loading, onSubmit } = useLogin()

    return (
        <div>
            <H3>Login</H3>
            <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <CustomInput
                        name="email"
                        register={register}
                        type="email"
                        label="Email :"
                        placeholder="adresse email"
                        classNameInput="bg-gray-100"
                        required
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <CustomInput
                        name="password"
                        register={register}
                        type="password"
                        label="Mot de passe :"
                        placeholder="mot de passe"
                        classNameInput="bg-gray-100"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <div className="form-control">
                        <label className="label cursor-pointer py-0">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary w-4 h-4 rounded-md mr-1"
                            />
                            <span className="label-text">Rester connecté</span>
                        </label>
                    </div>
                    <Link
                        href={"/forgotpassword"}
                        className="text-sm text-primary"
                    >
                        Mot de passe oublié ?
                    </Link>
                </div>
                <Button
                    className="btn w-full normal-case"
                    size="lg"
                    disabled={loading}
                >
                    Se connecter
                </Button>
                {message && (
                    <p className="text-red-500 text-center">{message}</p>
                )}
            </form>
            {loading && <Loading />}
        </div>
    )
}

type LoginProps = {}
