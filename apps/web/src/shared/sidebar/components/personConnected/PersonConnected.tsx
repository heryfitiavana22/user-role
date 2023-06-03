"use client"
import Image from "next/image"
import { UserOption } from "./components"
import { LogOutIcon, SettingsIcon } from "@/shared/icons"

export function PersonConnected({}: PersonConnectedProps) {
    return (
        <div className="flex justify-center bg-transparent">
            <div className="dropdown dropdown-right dropdown-end">
                <label tabIndex={0}>
                    <Image
                        src="/images/avatar.png"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-lg cursor-pointer"
                        alt=""
                    />
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow rounded-box w-52"
                >
                    <li>
                        <UserOption name="Paramètres" icon={<SettingsIcon />} />
                    </li>
                    <li>
                        <UserOption
                            name="Se déconnecter"
                            icon={<LogOutIcon />}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

type PersonConnectedProps = {}
