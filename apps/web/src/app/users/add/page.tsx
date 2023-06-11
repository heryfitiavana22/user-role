import { FormUser } from "@/features"
import { getAllData } from "@/shared"

export default async function Page({}: PageProps) {
    const roles = await getAllData<Role>("role")
    
    return (
        <div>
            <h3 className="text-xl font-semibold">Ajouter un utilisateur</h3>
            <FormUser type="create" roles={roles} />
        </div>
    )
}

type PageProps = {}
