import { styled } from "@stitches/react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 32 32"
        {...props}
    >
        <path
            d="M28.07 21 22 15l6.07-6 1.43 1.41L24.86 15l4.64 4.59L28.07 21zM22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7ZM12 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7Z"
            strokeWidth={3}
        />
        <path d="M0 0h32v32H0z" fill="none" strokeWidth={3} />
    </svg>
);

export const RoleIcon = styled(SvgComponent, {
    fill: "CurrentColor",
});
