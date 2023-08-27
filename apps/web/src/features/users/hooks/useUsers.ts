import { Routes } from "@/Routes"
import { deleteOneData, getAllData } from "@/shared"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export function useUsers(enableFetching = true) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pageParams = Number(searchParams.get("page") || 1)
    const [page, setPage] = useState(pageParams)
    const query = `?page=${page}`
    console.log(query)

    const { data, isLoading, isPreviousData, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: () => getAllData<User>({ uri: "user", query }),
        enabled: enableFetching,
        // keepPreviousData: true,
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

    console.log(data)

    useEffect(() => {
        if (data) setUsers(data)
    }, [data])

    useEffect(() => {
        router.push(Routes.users() + query)
        refetch()
    }, [page])

    useEffect(() => {
        const pageParams = Number(searchParams.get("page") || 1)
        if (pageParams !== page) setPage(pageParams)
    }, [searchParams])

    return {
        users,
        isLoading,
        isRemoving,
        page,
        onDelete: (_id: string) => {
            mutate(_id)
        },
        prevPage: () => {
            if (page > 1) setPage((last) => last - 1)
        },
        nextPage: () => {
            setPage((last) => last + 1)
        },
    }
}
