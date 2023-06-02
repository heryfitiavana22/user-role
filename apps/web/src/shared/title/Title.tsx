import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'

export function Title({ as = 'h1', classname, children }: TitleProps) {
    return React.createElement(
        as,
        { className: classNames('', classname) },
        children
    )
}

type TitleProps = PropsWithChildren<{
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    classname?: string
}>
