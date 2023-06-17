import { Routes } from "@/Routes"
import { Users } from "@/features"
import { Button, H3 } from "@/shared"
import Link from "next/link"

export default function Page({}: PageProps) {
    return (
        <div>
            <div className="flex justify-between">
                <H3>Les utilisateurs</H3>
                <Link href={Routes.addUser()}>
                    <Button size={"md"}>
                        Ajouter
                    </Button>
                </Link>
            </div>
            <Users />
        </div>
    )
}

export const metadata = {
    title: "Utilisateurs",
}

type PageProps = {}
