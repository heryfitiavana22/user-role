import { Users } from "@/features";
import Link from "next/link";

export default function Page({}: PageProps) {
    return (
        <div className="">
            <div className="flex justify-between">
                <h3>Les utilisateurs</h3>
                <Link
                    href="#"
                    className="flex place-items-center bg-violet-400 text-white h-9 px-5 rounded-md"
                >
                    Ajouter
                </Link>
            </div>
            <Users />
        </div>
    );
}

export const metadata = {
    title: "Utilisateurs",
};

type PageProps = {};
