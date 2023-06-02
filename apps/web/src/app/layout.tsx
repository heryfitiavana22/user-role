import { Sidebar } from '@/shared'
import './global.css'
import { Inter } from 'next/font/google'
import { getCssText } from '@/config'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />
            </head>
            <body className={inter.className}>
                <div className="flex w-full p-1 md:min-h-screen flex-wrap md:flex-nowrap overflow-hidden">
                    <Sidebar />
                    <div className="w-full p-5">{children}</div>
                </div>
            </body>
        </html>
    )
}
