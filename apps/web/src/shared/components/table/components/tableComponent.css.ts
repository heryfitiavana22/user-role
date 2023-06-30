import { brandColor, neutral } from "@/config"
import { style } from "@vanilla-extract/css"

export const th = style({
    backgroundColor: brandColor[100],
    position: "static",
    color: neutral[900],
})

export const td = style({
    backgroundColor: neutral[100],
})
