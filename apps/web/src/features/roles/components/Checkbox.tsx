import { PropsWithChildren } from "react"

export function Checkbox({
    checked = false,
    onChecked,
    onUnChecked,
}: CheckboxProps) {
    return (
        <input
            type="checkbox"
            className="checkbox checkbox-primary checked:!text-white"
            onChange={checked ? onUnChecked : onChecked}
            checked={checked}
        />
    )
}

type CheckboxProps = PropsWithChildren<{
    onChecked: () => void
    onUnChecked: () => void
    checked?: boolean
}>
