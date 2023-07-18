import { Routes } from "@/Routes"
import { Users } from "@/features"
import { Button, CannotDoService, H3, useUserInServer } from "@/shared"
import { services } from "data"
import Link from "next/link"

export default async function Page({}: PageProps) {
    const { ability, canSeeService } = await useUserInServer()

    if (!canSeeService(services.users))
        return <CannotDoService service="utilisateurs" />

    return (
        <div>
            <div className="flex justify-between">
                <H3>Les utilisateurs</H3>
                {ability.can("create", services.users) && (
                    <Link href={Routes.addUser()}>
                        <Button size={"md"}>Ajouter</Button>
                    </Link>
                )}
            </div>
            <Users />
        </div>
    )
}

export const metadata = {
    title: "Utilisateurs",
}

type PageProps = {}
