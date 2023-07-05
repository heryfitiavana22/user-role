"use client"
import { frontendConfig } from "@/config"
import { PropsWithChildren } from "react"
import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react"

SuperTokensReact.init(frontendConfig())

export function SuperTokens({ children }: SuperTokensProps) {
    return <SuperTokensWrapper>{children}</SuperTokensWrapper>
}

type SuperTokensProps = PropsWithChildren<{}>
