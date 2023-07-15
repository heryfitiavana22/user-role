import { SVGProps } from "react"
import { strokeCurrent } from "./icon.css"

export const NewsLetterIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 32 32"
        {...props}
    >
        <path
            className={strokeCurrent}
            strokeLinejoin="round"
            strokeMiterlimit={4.62}
            strokeWidth={2}
            d="M5 16h5.5s1 3.5 5.5 3.5 5.5-3.5 5.5-3.5H27v8c0 1.5-1.5 3-3 3H8c-1.5 0-3-1.5-3-3v-8z"
        />
        <path
            className={strokeCurrent}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m27 16-1-3M5 19.5V16l1-3"
        />
        <path
            className={strokeCurrent}
            strokeLinecap="round"
            strokeWidth={2}
            d="M13.5 9h5m-5 4h5"
        />
        <path
            className={strokeCurrent}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.5 13V5h13v8"
        />
    </svg>
)
