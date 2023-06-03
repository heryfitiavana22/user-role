import { createStitches } from "@stitches/react"
import { brandColor, neutral } from "./colors"

export const { styled, getCssText } = createStitches({
    theme: {
        colors: {
            brandColor50: brandColor[50],
            brandColor100: brandColor[100],
            brandColor200: brandColor[200],
            brandColor300: brandColor[300],
            brandColor400: brandColor[400],
            brandColor500: brandColor[500],
            brandColor600: brandColor[600],
            brandColor700: brandColor[700],
            brandColor800: brandColor[800],
            brandColor900: brandColor[900],
            neutral50: neutral[50],
            neutral100: neutral[100],
            neutral200: neutral[200],
            neutral300: neutral[300],
            neutral400: neutral[400],
            neutral500: neutral[500],
            neutral600: neutral[600],
            neutral700: neutral[700],
            neutral800: neutral[800],
            neutral900: neutral[900],
        },
    },
})
