import { FormUser } from "@/features"
import { H3, getAllData } from "@/shared"

export default async function Page({ params }: PageProps) {
    const roles = await getAllData<Role>("role")

    return (
        <div>
            <H3>{"Modifier l'utilisateur"} </H3>
            <FormUser type="update" id={params.id} roles={roles} />
        </div>
    )
}

type PageProps = {
    params: {
        id: string
    }
}
