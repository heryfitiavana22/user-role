"use client"
import { useSession } from "next-auth/react"

export function useUserConnected() {
    const session = useSession()

    return {
        name: session.data?.user?.name || "",
        email: session.data?.user?.email || "",
        imageURL: session.data?.user?.image || undefined,
        role: (session.data?.user as any)?.role as Role,
    }
}
