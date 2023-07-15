import { CannotSeeService, useUserInServer } from "@/shared"
import { PropsWithChildren } from "react"

export default async function Layout({ children }: LayoutProps) {
    const { canSeeService } = await useUserInServer()

    return (
        <>
            {canSeeService("post") ? (
                children
            ) : (
                <CannotSeeService service="posts" />
            )}
        </>
    )
}

type LayoutProps = PropsWithChildren<{}>
