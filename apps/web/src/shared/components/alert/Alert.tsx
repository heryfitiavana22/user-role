import classNames from "classnames"
import { PropsWithChildren } from "react"
import { IconAlertFactory } from "./components"

export function Alert({ type = "default", children }: AlertProps) {
    const alertClass = type == "default" ? "" : `alert-${type}`
    return (
        <div className={classNames("alert", alertClass)}>
            <IconAlertFactory type={type} />
            <div>{children}</div>
        </div>
    )
}

type AlertProps = PropsWithChildren<{
    type?: Alert
}>
