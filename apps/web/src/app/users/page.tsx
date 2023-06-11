import { Users } from "@/features"
import { Button } from "@/shared"
import Link from "next/link"

export default function Page({}: PageProps) {
    return (
        <div className="">
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Les utilisateurs</h3>
                <Link href="users/add">
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
