import { Alert, Button } from "@/shared"
import classNames from "classnames"
import { PropsWithChildren, useState } from "react"

export function RowForm({ children, className }: RowFormProps) {
    return (
        <div className={classNames("grid grid-cols-6", className)}>
            {children}
        </div>
    )
}

export function ItemRowForm({
    center = false,
    children,
    className,
}: ItemRowFormProps) {
    return (
        <div
            className={classNames(
                "flex",
                {
                    "justify-center items-center": center,
                },
                className
            )}
        >
            {children}
        </div>
    )
}



type RowFormProps = PropsWithChildren<{
    className?: string
}>

type ItemRowFormProps = PropsWithChildren<{
    center?: boolean
    className?: string
}>


