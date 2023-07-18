import { Routes } from "@/Routes"
import { Roles } from "@/features"
import { Button, CannotDoService, H3, useUserInServer } from "@/shared"
import { services } from "data"
import Link from "next/link"

export default async function Page({}: PageProps) {
    const { ability, canSeeService } = await useUserInServer()

    if (!canSeeService(services.roles))
        return <CannotDoService service="rôles" />

    return (
        <div>
            <div className="flex justify-between">
                <H3>Les rôles</H3>
                {ability.can("create", services.roles) && (
                    <Link href={Routes.addRole()}>
                        <Button>Ajouter</Button>
                    </Link>
                )}
            </div>
            <Roles />
        </div>
    )
}

export const metadata = {
    title: "Rôles",
}

type PageProps = {}
