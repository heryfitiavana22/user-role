import { deleteOneData, getAllData } from "@/shared"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export function useRoles() {
    const { isLoading, data } = useQuery({
        queryKey: ["roles"],
        queryFn: () => getAllData<Role>("role"),
        initialData: [],
    })
    const [roles, setRoles] = useState(data)
    const [isRemoving, setIsRemoving] = useState(false)
    const { mutate } = useMutation<Role, Error, string>({
        mutationKey: ["deleterole"],
        mutationFn: (roleId) => deleteOneData("role", roleId),
        onMutate: () => {
            setIsRemoving(true)
        },
        onSuccess(role) {
            const rolesFilterd = roles.filter((r) => r._id !== role._id)
            setRoles(rolesFilterd)
        },
        onSettled() {
            setIsRemoving(false)
        },
    })

    useEffect(() => {
        if (data) setRoles(data)
    }, [data])

    return {
        roles,
        isLoading,
        isRemoving,
        onDelete: (roleId: string) => {
            mutate(roleId)
        },
    }
}

type FnLoading = () => void
