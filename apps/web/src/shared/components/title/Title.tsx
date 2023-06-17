import classNames from "classnames"
import React, { PropsWithChildren } from "react"

function title({ as = "h1", classNameHigh }: TitleParams) {
    return ({ children, className }: TitleProps) => {
        return React.createElement(
            as,
            { className: classNames(classNameHigh, className) },
            children
        )
    }
}

export const H1 = title({ as: "h1", classNameHigh: "text-3xl font-bold" })
export const H2 = title({ as: "h1", classNameHigh: "text-2xl font-bold" })
export const H3 = title({ as: "h1", classNameHigh: "text-xl font-semibold" })
export const H4 = title({ as: "h1", classNameHigh: "text-lg font-semibold" })
export const H5 = title({ as: "h1", classNameHigh: "text-base font-semibold" })
export const H6 = title({ as: "h1", classNameHigh: "text-base" })

type TitleParams = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    classNameHigh?: string
}

type TitleProps = PropsWithChildren<{
    className?: string
}>
