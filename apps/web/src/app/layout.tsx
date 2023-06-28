import { Sidebar } from "@/shared"
import "./global.css"
import { Poppins } from "next/font/google"
import { getCssText } from "@/config"
import { ReactQuery } from "./ReactQuery"

const font = Poppins({ weight: "400", subsets: ["latin"] })

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
            <body className={font.className} suppressHydrationWarning={true}>
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
