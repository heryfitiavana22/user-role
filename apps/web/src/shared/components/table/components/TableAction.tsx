import { PropsWithChildren } from "react"
import classNames from "classnames"
import Link from "next/link"

export function TableAction({
    href,
    children,
    className,
    type,
    disabled = false,
}: TableActionProps) {
    const classNameValue = classNames(
        "tooltip tooltip-bottom cursor-pointer",
        colorFactory(type, disabled),
        className
    )

    if (href)
        return (
            <Link
                className={classNameValue}
                data-tip={dataTipFactory(type)}
                href={href}
            >
                {children}
            </Link>
        )

    return (
        <div className={classNameValue} data-tip={dataTipFactory(type)}>
            {children}
        </div>
    )
}

function colorFactory(type: TableActionType, disabled = false) {
    if (type == "edit") return disabled ? "text-blue-300" : "text-blue-400"
    if (type == "delete") return disabled ? "text-red-300" : "text-red-400"
    return ""
}

function dataTipFactory(type: TableActionType) {
    if (type == "edit") return "Modifier"
    if (type == "delete") return "Supprimer"
    return ""
}

type TableActionProps = PropsWithChildren<{
    className?: string
    href?: string
    type: TableActionType
    disabled?: boolean
}>

type TableActionType = "edit" | "delete"
