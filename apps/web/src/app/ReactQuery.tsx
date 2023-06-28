"use client"
import "react-loading-skeleton/dist/skeleton.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"

const querClient = new QueryClient()

export function ReactQuery({ children }: ReactQueryProps) {
    return (
        <QueryClientProvider client={querClient}>
            {children}
        </QueryClientProvider>
    )
}

type ReactQueryProps = PropsWithChildren<{}>
