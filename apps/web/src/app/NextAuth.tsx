"use client"
import { PropsWithChildren } from "react"
import { SessionProvider } from "next-auth/react"

export function NextAuth({ children }: NextAuthProps) {
    return <SessionProvider>{children}</SessionProvider>
}

type NextAuthProps = PropsWithChildren<{}>
