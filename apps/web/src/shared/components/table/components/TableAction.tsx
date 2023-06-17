import { PropsWithChildren } from "react"
import classNames from "classnames"
import Link from "next/link"

export function TableAction({

    href,
    children,
    className,
    type,
}: TableActionProps) {
    return (
        <Link
            className={classNames(
                "tooltip tooltip-bottom cursor-pointer",
                colorFactory(type),
                className
            )}
            data-tip={dataTipFactory(type)}
            href={href}
        >
            {children}
        </Link>
    )
}

function colorFactory(type: TableActionType) {
    if (type == "edit") return "text-blue-400"
    if (type == "delete") return "text-red-400"
    return ""
}

function dataTipFactory(type: TableActionType) {
    if (type == "edit") return "Modifier"
    if (type == "delete") return "Supprimer"
    return ""
}

type TableActionProps = PropsWithChildren<{
    className?: string
    href: string
    type: TableActionType
}>

type TableActionType = "edit" | "delete"
