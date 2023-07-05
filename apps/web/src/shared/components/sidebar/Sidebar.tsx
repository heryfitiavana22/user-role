"use client"
import { useState } from "react"
import {
    CloseIcon,
    DashboardIcon,
    MenuIcon,
    RoleIcon,
    StatisticsIcon,
    UsersIcon,
} from "../icons"
import { IconWrapper, PersonConnected } from "./components"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import { Routes } from "@/Routes"
import { ItemsSidebar } from "./ItemsSidebar"

export function Sidebar({}: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <nav className="grid w-full h-14 px-3 md:px-0 md:justify-center md:h-auto md:w-14 md:pt-6 bg-gray-100 rounded-md">
            <div className="flex items-center flex-row md:flex-col justify-between">
                <div>
                    <div className="flex justify-center">
                        <div className="bg-primary w-8 h-8 rounded-full"></div>
                    </div>
                    <div
                        className={classNames(
                            "grid place-items-center bg-violet-200 z-[1111] fixed top-0 w-full h-full transition-all md:bg-transparent md:static md:mt-5 md:block",
                            isOpen ? "right-0" : "right-full"
                        )}
                    >
                        <div className="flex flex-col items-baseline md:block">
                            {ItemsSidebar.map((item, k) => (
                                <IconWrapper
                                    name={item.name}
                                    href={item.link}
                                    isActive={pathname.includes(item.link)}
                                    key={k}
                                >
                                    <item.Icon />
                                </IconWrapper>
                            ))}
                        </div>
                        <div
                            className="absolute top-4 right-4 text-slate-600 md:hidden"
                            onClick={() => setIsOpen(false)}
                        >
                            <CloseIcon />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center md:items-stretch md:flex-col md:mb-3">
                    <PersonConnected />
                    <div
                        className="ml-3 md:hidden"
                        onClick={() => setIsOpen(true)}
                    >
                        <MenuIcon />
                    </div>
                </div>
            </div>
        </nav>
    )
}

type SidebarProps = {}
