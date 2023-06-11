import { styled } from "@/config"
import classNames from "classnames"
import { ComponentProps } from "react"

function Btn(props: BtnProps) {
    return (
        <button {...props} className={classNames("btn", props.className)}>
            {props.children}
        </button>
    )
}

type BtnProps = ComponentProps<"button">

export const Button = styled(Btn, {
    textTransform: "none",
    minHeight: "auto",
    height: "auto",
    variants: {
        color: {
            pirmary: {
                background: "$brandColor400",
                borderColor: "$brandColor400",
                color: "White",
                "&:hover": {
                    backgroundColor: "$brandColor500",
                    borderColor: "$brandColor500",
                },
            },
            secondary: {
                background: "$brandColor300",
                borderColor: "$brandColor300",
                color: "White",
                "&:hover": {
                    backgroundColor: "$brandColor300",
                    borderColor: "$brandColor300",
                },
            },
        },
        size: {
            sm: {
                padding: "6px 12px",
                height: 32,
            },
            md: {
                padding: "8px 16px",
                height: 40,
            },
            lg: {
                padding: "14px 24px",
                height: 52,
            },
        },
    },
    defaultVariants: {
        color: "pirmary",
        size: "md",
    },
})
