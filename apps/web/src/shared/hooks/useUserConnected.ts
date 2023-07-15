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
    const ability = defineAbilityForUser(user)

    return {
        user,
        Can: createCanBoundTo(ability),
        ability,
        canSeeService: (service: string) => {
            return (
                ability.can("read", service) ||
                ability.can("create", service) ||
                ability.can("update", service) ||
                ability.can("delete", service)
            )
        },
    }
}
