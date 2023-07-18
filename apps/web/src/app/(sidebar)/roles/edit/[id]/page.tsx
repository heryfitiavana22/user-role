import { FormRole } from "@/features"
import { H3 } from "@/shared"
import { servicesList } from "data"

export default function Page({ params }: PageProps) {
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
