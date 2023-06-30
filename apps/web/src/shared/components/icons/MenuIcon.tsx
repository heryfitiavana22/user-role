import { SVGProps } from "react"
import { strokeCurrent } from "./icon.css"

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 17h8m-8-5h14m-8-5h8"
            className={strokeCurrent}
        />
    </svg>
)
