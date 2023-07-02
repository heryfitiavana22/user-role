import { PropsWithChildren } from "react"

export default function Template({ children }: TemplateProps) {
    return <>{children}</>
}

type TemplateProps = PropsWithChildren<{}>
