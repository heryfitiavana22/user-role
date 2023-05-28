import { Sidebar } from "@/shared";
import { NextUI } from "./NextUI";
import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextUI>
                    <div className="flex w-full p-1 md:min-h-screen flex-wrap md:flex-nowrap">
                        <Sidebar />
                        <div className="w-full p-5">{children}</div>
                    </div>
                </NextUI>
            </body>
        </html>
    );
}
