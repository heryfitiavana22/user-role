import { Sidebar } from "@/shared"
import "./global.css"
import { Inter } from "next/font/google"
import { getCssText } from "@/config"
import { ReactQuery } from "./ReactQuery"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head>
                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />
            </head>
            <body className={inter.className}   suppressHydrationWarning={true} >
                <ReactQuery>
                    <div className="flex w-full p-1 md:min-h-screen flex-wrap md:flex-nowrap overflow-hidden">
                        <Sidebar />
                        <div className="w-full p-5">{children}</div>
                    </div>
                </ReactQuery>
            </body>
        </html>
    )
}
