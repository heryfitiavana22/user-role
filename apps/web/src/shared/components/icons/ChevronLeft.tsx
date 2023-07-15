import { SVGProps } from "react"
import { strokeCurrent } from "./icon.css"

export const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        {...props}
        fill="none"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m14 16-4-4 4-4"
            className={strokeCurrent}
        />
    </svg>
)
