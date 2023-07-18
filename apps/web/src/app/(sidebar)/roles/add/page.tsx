import { FormRole } from "@/features"
import { CannotDoService, H3, useUserInServer } from "@/shared"
import { servicesList, services as serviceData } from "data"

export default async function Page({}: PageProps) {
    const { ability } = await useUserInServer()
    if (ability.cannot("create", serviceData.roles))
        return <CannotDoService action="créer" service="rôles" />

    const services = servicesList
    return (
        <div>
            <H3>Ajouter un rôle</H3>
            <FormRole type="create" services={services} />
        </div>
    )
}

export const metadata = {
    title: "Ajouter un rôle",
}

type PageProps = {}
