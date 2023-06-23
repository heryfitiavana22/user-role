"use client"

import { useState, PropsWithChildren } from "react"

export function Checkbox({
    checked = false,
    onChecked,
    onUnChecked,
}: CheckboxProps) {
    const [checkedValue, setCheckedValue] = useState(checked)
    return (
        <input
            type="checkbox"
            className="checkbox checkbox-primary checked:!text-white"
            onChange={
                checkedValue
                    ? () => {
                          onUnChecked()
                          setCheckedValue(false)
                      }
                    : () => {
                          onChecked()
                          setCheckedValue(true)
                      }
            }
            checked={checkedValue}
        />
    )
}

type CheckboxProps = PropsWithChildren<{
    onChecked: () => void
    onUnChecked: () => void
    checked?: boolean
}>
