"use client"
import { SubmitHandler } from "react-hook-form"
import { LoginValue } from "../Login"
import { signIn } from "next-auth/react"

export function useLogin() {
    const onSubmit: SubmitHandler<LoginValue> = async (data) => {
        console.log(data)
        if (!data.email || !data.password || !data.email.includes("@")) return

        const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        })
        console.log(result)
    }

    return {
        onSubmit,
    }
}
