"use client"
import { SubmitHandler } from "react-hook-form"
import { LoginValue } from "../Login"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Routes } from "@/Routes"

export function useLogin() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const router = useRouter()

    const onSubmit: SubmitHandler<LoginValue> = async (data) => {
        setLoading(true)
        if (!data.email || !data.password)
            return setMessage("Remplir tous les champs")
        if (!data.email.includes("@")) return setMessage("Erreur sur l'email")

        const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        })
        setLoading(false)
        if (result && result.error)
            return setMessage("Email ou mot de passe invalide")

        router.push(Routes.dashboard())
    }

    return {
        message,
        loading,
        onSubmit,
    }
}
