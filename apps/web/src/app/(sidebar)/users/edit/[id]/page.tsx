import { FormUser } from "@/features"
import { CannotDoService, H3, getAllData, useUserInServer } from "@/shared"
import { services } from "data"

export default async function Page({ params }: PageProps) {
    const { ability } = await useUserInServer()
    if (ability.cannot("update", services.users))
        return <CannotDoService action="modifier" service="utilisateurs" />

    const roles = await getAllData<Role>("role")

    return (
        <div>
            <H3>{"Modifier l'utilisateur"} </H3>
            <FormUser type="update" id={params.id} roles={roles} />
        </div>
    )
}

export const metadata = {
    title: "Modifier un utilisateur",
}

type PageProps = {
    params: {
        id: string
    }
}
