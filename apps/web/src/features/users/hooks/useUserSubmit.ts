"use client"
import { createData, createDataOld, updateOneData, useLoading } from "@/shared"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { SubmitHandler, UseFormReset } from "react-hook-form"

export function useUserSubmit(
    type: CreateOrUpdate,
    reset: UseFormReset<UserForm>
) {
    const [message, setMessage] = useState({ text: "", success: false })
    const { runLoading, stopLoading } = useLoading()
    const fnSubmitFactory = type == "create" ? createData : updateOneData
    const { mutate } = useMutation<User, Error, User>({
        mutationKey: ["userSubmit"],
        mutationFn: (data) => fnSubmitFactory("user", data),
        onMutate: () => {
            runLoading()
        },
        onSuccess: (data) => {
            if (type == "create")
                reset({
                    email: "",
                    name: "",
                    role: { name: data.role.name },
                    fileList: [],
                })

            return setMessage({
                success: true,
                text: `Utilisateur ${type == "create" ? "crée" : "mis à jour"}`,
            })
        },
        onError: () => {
            setMessage({
                success: false,
                text: `Erreur`,
            })
        },
        onSettled: () => {
            stopLoading()
        },
    })

    const onSubmit: SubmitHandler<UserForm> = async (user) => {
        mutate(user)
    }

    return {
        message,
        onSubmit,
    }
}
