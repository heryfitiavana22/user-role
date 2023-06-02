import { styled } from '@stitches/react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
        className=""
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 17h8m-8-5h14m-8-5h8"
            className={props.className}
        />
    </svg>
)

export const MenuIcon = styled(SvgComponent, {
    stroke: 'CurrentColor',
})
