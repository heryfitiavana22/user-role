import { styled } from '@/config'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        {...props}
        fill="none"
        className=""
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7h16M6 7v11a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5Z"
            className={props.className}
        />
    </svg>
)

export const DeleteIcon = styled(SvgComponent, {
    stroke: 'CurrentColor',
})
