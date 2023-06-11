import { styled } from "@/config"
import { SVGProps } from "react"

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
            d="m14 16-4-4 4-4"
            className={props.className}
        />
    </svg>
)
export const ChevronLeft = styled(SvgComponent, {
    stroke: "CurrentColor",
})
