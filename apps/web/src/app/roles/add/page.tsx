import { FormRole } from "@/features"
import { H3 } from "@/shared"
import { PropsWithChildren } from "react"

export default async function Page({}: PageProps) {
    const services = ["Newsletter", "Post", "Forum"]

    return (
        <div>
            <H3>Ajouter un rôle</H3>
            <FormRole type="create" services={services}/>
        </div>
    )
}

type PageProps = PropsWithChildren<{}>
