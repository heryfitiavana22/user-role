import { CannotDoService, useUserInServer } from "@/shared"
import { PropsWithChildren } from "react"

export default async function Layout({ children }: LayoutProps) {
    const { canSeeService } = await useUserInServer()

    return (
        <>
            {canSeeService("post") ? (
                children
            ) : (
                <CannotDoService service="posts" />
            )}
        </>
    )
}

type LayoutProps = PropsWithChildren<{}>
