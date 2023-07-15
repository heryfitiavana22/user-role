import { deleteOneData, getAllData } from "@/shared"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export function useUsers() {
    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: () => getAllData<User>("user"),
    })
    const dataState = data || []
    const [users, setUsers] = useState(dataState)
    const [isRemoving, setIsRemoving] = useState(false)
    const { mutate } = useMutation<User, Error, string>({
        mutationKey: ["useusers"],
        mutationFn: (idUser) => deleteOneData("user", idUser),
        onMutate() {
            setIsRemoving(true)
        },
        onSuccess(user) {
            const usersFiltered = users.filter((u) => u._id !== user._id)
            setUsers(usersFiltered)
        },
        onError: (error) => {
            console.log(error)
        },
        onSettled() {
            setIsRemoving(false)
        },
    })

    useEffect(() => {
        if (data) setUsers(data)
    }, [data])

    return {
        users,
        isLoading,
        isRemoving,
        onDelete: (_id: string) => {
            mutate(_id)
        },
    }
}
