import "./global.css"
import { Poppins, Inter } from "next/font/google"
import { ReactQuery } from "./ReactQuery"
import { NextAuth } from "./NextAuth"

const poppins = Poppins({ weight: "400", subsets: ["latin"], fallback: ["arial"] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head></head>
            <body className={poppins.className} suppressHydrationWarning={true}>
                <NextAuth>
                    <ReactQuery>{children}</ReactQuery>
                </NextAuth>
            </body>
        </html>
    )
}
