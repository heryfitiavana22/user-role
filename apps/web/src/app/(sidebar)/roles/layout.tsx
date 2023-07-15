import { CannotSeeService, useUserInServer } from "@/shared"
import { PropsWithChildren } from "react"

export default async function Layout({ children }: LayoutProps) {
    const { canSeeService } = await useUserInServer()

    return (
        <>
            {canSeeService("roles") ? (
                children
            ) : (
                <CannotSeeService service="rôles" />
            )}
        </>
    )
}

type LayoutProps = PropsWithChildren<{}>
