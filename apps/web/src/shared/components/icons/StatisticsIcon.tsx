import classNames from "classnames"
import { SVGProps } from "react"
import { strokeCurrent } from "./icon.css"

export const StatisticsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
        <defs>
            <style>
                {`.b{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}`}
            </style>
        </defs>
        <path
            d="M2 2v18a2 2 0 0 0 2 2h18"
            style={{
                fillRule: "evenodd",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
            }}
            className={strokeCurrent}
        />
        <rect
            width={3}
            height={6}
            x={6}
            y={12}
            className={classNames("b", strokeCurrent)}
            rx={1.5}
        />
        <rect
            width={3}
            height={6}
            x={12}
            y={7}
            className={classNames("b", strokeCurrent)}
            rx={1.5}
        />
        <rect
            width={3}
            height={6}
            x={18}
            y={3}
            className={classNames("b", strokeCurrent)}
            rx={1.5}
        />
    </svg>
)
