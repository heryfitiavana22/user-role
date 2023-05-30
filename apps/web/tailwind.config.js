/** @type {import('tailwindcss').Config} */
import { brandColor, neutral } from "./src/config";
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                brandColor,
                neutral,
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: brandColor[500],
                    secondary: brandColor[400],
                    accent: "#37CDBE",
                    neutral: "#3D4451",
                    "base-100": "#FFFFFF",
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
