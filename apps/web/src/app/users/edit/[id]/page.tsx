import { FormUser } from "@/features"
import { getAllData } from "@/shared"

export default async function Page({ params }: PageProps) {
    const roles = await getAllData<Role>("role")
    
    return (
        <div>
            <h3 className="text-xl font-semibold">Modifier l'utilisateur </h3>
            <FormUser type="update" id={params.id} roles={roles}/>
        </div>
    )
}

type PageProps = {
    params: {
        id: string
    }
}
