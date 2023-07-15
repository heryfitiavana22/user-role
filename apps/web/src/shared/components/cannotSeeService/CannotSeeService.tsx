import { PropsWithChildren } from "react"
import { H2 } from "../title"

export function CannotSeeService({ service }: CannotSeeServiceProps) {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <H2>Vous n'êtes pas autorisé à voir les {service}</H2>
        </div>
    )
}

type CannotSeeServiceProps = PropsWithChildren<{
    service: string
}>
