import { ComponentProps } from "react"
import { td, th } from "./tableComponent.css"
import classNames from "classnames"

export function Th(props: ThProps) {
    return (
        <th {...props} className={classNames(th, props.className)}>
            {props.children}
        </th>
    )
}

export function Td(props: TdProps) {
    return (
        <td {...props} className={classNames(td, props.className)}>
            {props.children}
        </td>
    )
}

type TdProps = ComponentProps<"td">
type ThProps = ComponentProps<"th">
