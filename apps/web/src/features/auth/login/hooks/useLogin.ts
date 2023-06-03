"use client"
import { SubmitHandler } from "react-hook-form"
import { LoginValue } from "../Login"

export function useLogin() {
    const onSubmit: SubmitHandler<LoginValue> = async (data) => {
        console.log(data)
        if (!data.email || !data.password || !data.email.includes("@")) return

        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        })
        if (!response.ok) return console.log("error fetching")
        console.log(response)
    }

    return {
        onSubmit,
    }
}
