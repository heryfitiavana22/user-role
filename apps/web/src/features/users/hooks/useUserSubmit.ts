"use client"
import { createData, updateOneData } from "@/shared"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { SubmitHandler, UseFormReset } from "react-hook-form"

export function useUserSubmit(
    type: CreateOrUpdate,
    reset: UseFormReset<UserForm>
) {
    const fnSubmitFactory = type == "create" ? createData : updateOneData
    const [message, setMessage] = useState({
        text: "",
        type: "default" as Alert,
    })
    const [isClicked, setIsClicked] = useState(false)
    const { mutate } = useMutation<User, Error, User>({
        mutationKey: ["userSubmit"],
        mutationFn: (data) => fnSubmitFactory("user", data),
        onMutate: () => {
            setIsClicked(true)
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
                text: `Utilisateur ${type == "create" ? "crée" : "mis à jour"}`,
                type: "success",
            })
        },
        onError: (error) => {
            setMessage({
                text: `Erreur lors de la ${
                    type == "create" ? "création" : "mise à jour"
                } de l'utilisateur`,
                type: "error",
            })
        },
        onSettled: () => {
            setIsClicked(false)
        },
    })

    const onSubmit: SubmitHandler<UserForm> = async (user) => {
        if (isClicked) return
        mutate(user)
    }

    return {
        isClicked,
        message,
        onSubmit,
    }
}
