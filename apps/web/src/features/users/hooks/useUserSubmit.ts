"use client"
import { createData, updateOneData } from "@/shared"
import { useState } from "react"
import { SubmitHandler, UseFormReset } from "react-hook-form"

export function useUserSubmit(
    type: CreateOrUpdate,
    reset: UseFormReset<UserForm>
) {
    const [message, setMessage] = useState({ text: "", success: false })

    const onSubmit: SubmitHandler<UserForm> = async (user) => {
        let response: RepositoryResponse<User>

        if (type == "create") {
            response = await createData("user", user)
            reset({
                email: "",
                name: "",
                role: { name: user.role.name },
                fileList: [],
            })
        } else if (type == "update")
            response = await updateOneData("user", user)
        else response = { ok: false, data: {} as User }

        if (response.ok)
            return setMessage({
                success: true,
                text: `Utilisateur ${type == "create" ? "crée" : "mis à jour"}`,
            })

        setMessage({
            success: false,
            text: `Erreur`,
        })
        // console.log(user)
    }

    return {
        message,
        onSubmit,
    }
}
