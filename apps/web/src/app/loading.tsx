import { Loading } from "@/shared"
import { PropsWithChildren } from "react"

export default function loading({}: LoadingProps) {
    return <Loading />
}

type LoadingProps = PropsWithChildren<{}>
