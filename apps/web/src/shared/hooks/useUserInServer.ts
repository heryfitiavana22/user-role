import { authOptions } from "@/config"
import { defineAbilityForUser } from "functions"
import { getServerSession } from "next-auth"

export async function useUserInServer() {
    const session = await getServerSession(authOptions)
    const user = {
        _id: (session?.user as any)?._id || "",
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        imageURL: session?.user?.image || undefined,
        role: (session?.user as any)?.role as Role,
    } as User
    const ability = defineAbilityForUser(user)

    return {
        user,
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
