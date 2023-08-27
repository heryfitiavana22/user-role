import { brandColor } from "@/config"
import { style, styleVariants } from "@vanilla-extract/css"

export const base = style({
    textTransform: "none",
    minHeight: "auto",
    height: "auto",
    color: "white !important",
})

export const btnColor = styleVariants({
    primary: {
        background: `${brandColor[400]} !important`,
        borderColor: `${brandColor[400]} !important`,
        ":hover": {
            backgroundColor: `${brandColor[500]} !important`,
            borderColor: `${brandColor[500]} !important`,
        },
    },
    secondary: {
        background: `${brandColor[300]} !important`,
        borderColor: `${brandColor[300]} !important`,
        ":hover": {
            backgroundColor: `${brandColor[400]} !important`,
            borderColor: `${brandColor[400]} !important`,
        },
    },
})

export const btnDisabled = style({
    background: `${brandColor[300]} !important`,
    borderColor: `${brandColor[300]} !important`,
})

export const btnSize = styleVariants({
    sm: {
        padding: "6px 12px",
        height: "32px !important",
    },
    md: {
        padding: "8px 16px",
        height: "40px !important",
    },
    lg: {
        padding: "14px 24px",
        height: "52px !important",
    },
})
