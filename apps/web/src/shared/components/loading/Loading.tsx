"use client"
import { useLoading } from "./hooks"

export function Loading({}: LoadingProps) {
    const { loading } = useLoading()

    if (!loading) return <></>

    return (
        <div className="fixed top-0 left-0 w-full h-full grid place-items-center text-primary">
            <div className="flex items-center">
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        </div>
    )
}

type LoadingProps = {}
