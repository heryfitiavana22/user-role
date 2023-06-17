import { Login } from "@/features"
import { H1 } from "@/shared"

export default async function Page({}: PageProps) {
    return (
        <div className="grid w-full min-h-screen md:grid-cols-2">
            <div className="p-5 bg-primary text-slate-200 hidden md:block">
                <H1>Roles</H1>
                <div className="mt-16">
                    <p className="text-2xl">Manage your user</p>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className="sm:w-80 w-64">
                    <Login />
                </div>
            </div>
        </div>
    )
}

type PageProps = {}
