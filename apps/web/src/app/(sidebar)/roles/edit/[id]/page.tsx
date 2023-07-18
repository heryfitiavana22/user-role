import { FormRole } from "@/features"
import { CannotDoService, H3, useUserInServer } from "@/shared"
import { servicesList, services as serviceData } from "data"

export default async function Page({ params }: PageProps) {
    const { ability } = await useUserInServer()
    if (ability.cannot("create", serviceData.roles))
        return <CannotDoService action="créer" service="rôles" />

    const services = servicesList
    return (
        <div>
            <H3>Modifier un rôle</H3>
            <FormRole services={services} type="update" id={params.id} />
        </div>
    )
}

export const metadata = {
    title: "Modifier un rôle",
}

type PageProps = {
    params: {
        id: string
    }
}
