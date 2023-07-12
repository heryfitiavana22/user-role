"use client"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useLogin } from "./hooks"
import { H3 } from "@/shared"
import { useSession } from "next-auth/react"

export type LoginValue = {
    email: string
    password: string
}

export function Login({}: LoginProps) {
    const { register, handleSubmit } = useForm<LoginValue>()
    const { onSubmit } = useLogin()

    return (
        <div>
            <H3>Login</H3>
            <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email :</span>
                    </label>
                    <input
                        type="text"
                        placeholder="adresse email"
                        className="input bg-gray-100 w-full max-w-xs"
                        {...register("email")}
                        required
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mot de passe :</span>
                    </label>
                    <input
                        type="password"
                        placeholder="mot de passe"
                        className="input bg-gray-100 w-full max-w-xs"
                        {...register("password")}
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
                <button className="btn btn-primary w-full normal-case hover:bg-violet-600">
                    Se connecter
                </button>
            </form>
        </div>
    )
}

type LoginProps = {}
