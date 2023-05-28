"use client";
import { styled } from "@stitches/react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="none"
    >
        <g fill="#000" clipPath="url(#a)" {...props}>
            <path
                fillRule="evenodd"
                d="M9 0a5.5 5.5 0 1 0 0 11A5.5 5.5 0 0 0 9 0ZM5.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
                clipRule="evenodd"
            />
            <path d="M15.5 0a1 1 0 1 0 0 2 3.5 3.5 0 1 1 0 7 1 1 0 1 0 0 2 5.5 5.5 0 1 0 0-11ZM19.084 14.016A1 1 0 0 1 20.4 13.5 6.001 6.001 0 0 1 24 19v2a1 1 0 1 1-2 0v-2c0-1.639-.985-3.05-2.4-3.668a1 1 0 0 1-.516-1.316ZM6 13a6 6 0 0 0-6 6v2a1 1 0 1 0 2 0v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2a1 1 0 1 0 2 0v-2a6 6 0 0 0-6-6H6Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill={props.fill} d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);

export const UsersIcon = styled(SvgComponent, {
    fill: "CurrentColor",
});
