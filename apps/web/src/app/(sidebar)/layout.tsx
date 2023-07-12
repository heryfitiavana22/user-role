import { Sidebar, checkIfNotConnected } from "@/shared"
import { PropsWithChildren } from "react"

export default async function Layout({ children }: LayoutProps) {
    await checkIfNotConnected()

    return (
        <div className="flex w-full p-1 md:min-h-screen flex-wrap md:flex-nowrap overflow-hidden">
            <Sidebar />
            <div className="w-full p-5">{children}</div>
        </div>
    )
}

type LayoutProps = PropsWithChildren<{}>
