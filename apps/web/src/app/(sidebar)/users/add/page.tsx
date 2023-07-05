import { FormUser } from "@/features"
import { H3, getAllData } from "@/shared"

export default async function Page({}: PageProps) {
    const roles = await getAllData<Role>("role")

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
