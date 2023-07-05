import "./global.css"
import { Poppins } from "next/font/google"
import { ReactQuery } from "./ReactQuery"
import { SuperTokens } from "./SuperTokens"

const font = Poppins({ weight: "400", subsets: ["latin"], fallback: ["arial"] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head></head>
            <body className={font.className} suppressHydrationWarning={true}>
                {/* <SuperTokens> */}
                    <ReactQuery>{children}</ReactQuery>
                {/* </SuperTokens> */}
            </body>
        </html>
    )
}
