import classNames from "classnames"
import { ComponentProps } from "react"
import { base, btnColor, btnDisabled, btnSize } from "./button.css"

export function Button({
    color = "primary",
    size = "md",
    children,
    className,
    onClick,
    disabled,
}: ButtonProps) {
    return (
        <button
            className={classNames(
                "btn",
                base,
                btnColor[color],
                btnSize[size],
                disabled ? btnDisabled : "",
                className
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

type ButtonProps = ComponentProps<"button"> & {
    color?: "primary" | "secondary"
    size?: "sm" | "md" | "lg"
}
