import { FormUser } from "@/features"
import { CannotDoService, H3, getAllData, useUserInServer } from "@/shared"
import { services } from "data"

export default async function Page({}: PageProps) {
    const { ability } = await useUserInServer()
    if (ability.cannot("create", services.users))
        return <CannotDoService action="créer" service="utilisateurs" />

    const roles = await getAllData<Role>("role", "no-store")

    return (
        <div>
            <H3>Ajouter un utilisateur</H3>
            <FormUser type="create" roles={roles} />
        </div>
    )
}

export const metadata = {
    title: "Ajouter un utilisateur",
}

type PageProps = {}
