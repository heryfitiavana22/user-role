import { CannotSeeService, useUserInServer } from "@/shared"
import { PropsWithChildren } from "react"

export default async function Layout({ children }: LayoutProps) {
    const { canSeeService } = await useUserInServer()

    return (
        <>
            {canSeeService("newsletter") ? (
                children
            ) : (
                <CannotSeeService service="newsletter" />
            )}
        </>
    )
}

type LayoutProps = PropsWithChildren<{}>
