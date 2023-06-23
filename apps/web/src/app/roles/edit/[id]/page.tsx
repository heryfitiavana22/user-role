import { FormRole } from "@/features"
import { H3 } from "@/shared"
import { PropsWithChildren } from "react"

export default function Page({ params }: PageProps) {
    const services = ["Newsletter", "Post", "Forum"]

    return (
        <div>
            <H3>Modifier un rôle</H3>
            <FormRole services={services} type="update" id={params.id} />
        </div>
    )
}

type PageProps = PropsWithChildren<{
    params: {
        id: string
    }
}>
