import { PropsWithChildren } from "react"
import classNames from "classnames"
import Link from "next/link"

export function TableAction({
    datatip,
    href,
    children,
    className,
}: TableActionProps) {
    return (
        <Link
            className={classNames(
                "tooltip tooltip-bottom cursor-pointer",
                className
            )}
            data-tip={datatip}
            href={href}
        >
            {children}
        </Link>
    )
}

type TableActionProps = PropsWithChildren<{
    className?: string
    datatip: string
    href: string
}>
