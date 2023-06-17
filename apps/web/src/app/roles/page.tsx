import { Routes } from "@/Routes"
import { Roles } from "@/features"
import { Button, H3 } from "@/shared"
import Link from "next/link"

export default function Page({}: PageProps) {
    return (
        <div>
            <div className="flex justify-between">
                <H3>Les rôles</H3>
                <Link href={Routes.addRole()}>
                    <Button>Ajouter</Button>
                </Link>
            </div>
            <Roles />
        </div>
    )
}

type PageProps = {}
