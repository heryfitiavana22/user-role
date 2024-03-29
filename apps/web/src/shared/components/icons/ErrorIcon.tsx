import { SVGProps } from "react"
import { strokeCurrent } from "./icon.css"

export const ErrorIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        {...props}
        fill="none"
        className=""
    >
        <path
            d="m10 14 2-2m0 0 2-2m-2 2-2-2m2 2 2 2m7-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
            className={strokeCurrent}
        />
    </svg>
)
