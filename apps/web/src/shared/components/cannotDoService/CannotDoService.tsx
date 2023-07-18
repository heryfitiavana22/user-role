import { PropsWithChildren } from "react"
import { H2 } from "../title"

export function CannotDoService({
    service,
    action = "voir",
}: CannotDoServiceProps) {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <H2>
                Vous n'êtes pas autorisé à {action} les {service}
            </H2>
        </div>
    )
}

type CannotDoServiceProps = PropsWithChildren<{
    service: string
    action?: "voir" | "modifier" | "créer"
}>
