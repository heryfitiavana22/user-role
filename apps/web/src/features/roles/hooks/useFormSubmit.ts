import { createData, updateOneData, useLoading } from "@/shared"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
type RoleSubmit = Pick<Role, "name" | "permissions"> & {
    _id?: string
}

export function useFormSubmit(type: CreateOrUpdate) {
    const [isClicked, setIsClicked] = useState(false)
    const [formState, setFormState] = useState({
        message: "",
        type: "default" as Alert,
    })
    const typeFrench = type == "create" ? "la création" : "mis à jour"
    const fnSubmitFactory = type == "create" ? createData : updateOneData
    const { runLoading, stopLoading } = useLoading()
    const { mutate } = useMutation<RoleSubmit, Error, RoleSubmit>({
        mutationKey: ["formRoles"],
        mutationFn: (data) => fnSubmitFactory("role", data),
        onMutate() {
            setIsClicked(true)
            runLoading()
        },
        onError() {
            setFormState({
                message: `Erreur lors ${
                    type == "create" ? "l'ajout" : "de la mise à jour"
                } du rôle`,
                type: "error",
            })
        },
        onSuccess() {
            setFormState({
                message: `Rôle ${type == "create" ? "crée" : "mis à jour"}`,
                type: "success",
            })
        },
        onSettled() {
            setIsClicked(false)
            stopLoading()
        },
    })

    return {
        isClicked,
        message: formState.message,
        type: formState.type,
        onSubmit: (permissions: Permission[]) => {
            const onSubmitValue: SubmitHandler<Role> = async (data) => {
                if (permissions.length == 0)
                    return setFormState({
                        message: "Attribuer au moins une permisson",
                        type: "error",
                    })

                let role: RoleSubmit = {
                    name: data.name,
                    permissions,
                }
                if (type == "update") role = { ...role, _id: data._id }

                return console.log(role);
                
                mutate(role)
            }
            return onSubmitValue
        },
    }
}
