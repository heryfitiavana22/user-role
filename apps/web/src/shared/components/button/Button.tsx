import classNames from "classnames"
import { ComponentProps, PropsWithChildren } from "react"
import { base, btnColor, btnSize } from "./button.css"

export function Button({
    color = "primary",
    size = "md",
    children,
    className,
    onClick,
}: ButtonProps) {
    return (
        <button
            className={classNames(
                "btn",
                base,
                btnColor[color],
                btnSize[size],
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

type ButtonProps = ComponentProps<"button"> & {
    color?: "primary" | "secondary"
    size?: "sm" | "md" | "lg"
}
