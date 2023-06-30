import { SVGProps } from "react"
import { strokeCurrent } from "./icon.css"

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10 8L14 12L10 16"
            className={strokeCurrent}
        />
    </svg>
)


