import { FormRole } from "@/features"
import { H3 } from "@/shared"
import { servicesList } from "data"

export default function Page({}: PageProps) {
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
