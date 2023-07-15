"use client"
import { createCanBoundTo } from "@casl/react"
import { defineAbilityForUser } from "functions"
import { useSession } from "next-auth/react"

export function useUserConnected() {
    const session = useSession()
    const user = {
        _id: (session.data?.user as any)?._id || "",
        name: session.data?.user?.name || "",
        email: session.data?.user?.email || "",
        imageURL: session.data?.user?.image || undefined,
        role: (session.data?.user as any)?.role as Role,
    } as User

    return {
        user,
        Can: createCanBoundTo(defineAbilityForUser(user)),
    }
}
