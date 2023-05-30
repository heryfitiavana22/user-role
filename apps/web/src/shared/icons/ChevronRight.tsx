import { styled } from "@/config";
import { SVGProps } from "react";

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
            d="M10 8L14 12L10 16"
            className={props.className}
        />
    </svg>
);

export const ChevronRight = styled(SvgComponent, {
    stroke: "CurrentColor",
});
