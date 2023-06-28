import { deleteOneData, getAllData } from "@/shared"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export function useUsers() {
    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: () => getAllData<User>("user"),
        initialData: [],
    })
    const [users, setUsers] = useState(data)
    const { mutate } = useMutation<User, Error, string>({
        mutationKey: ["useusers"],
        mutationFn: (idUser) => deleteOneData("user", idUser),
        onSuccess(user) {
            console.log("suces")

            const usersFiltered = users.filter((u) => u._id !== user._id)
            setUsers(usersFiltered)
        },
        onError: (error) => {
            console.log(error)
        },
    })

    useEffect(() => {
        if (data) setUsers(data)
    }, [data])

    return {
        users,
        isLoading,
        onDelete: (_id: string) => {
            mutate(_id)
        },
    }
}
