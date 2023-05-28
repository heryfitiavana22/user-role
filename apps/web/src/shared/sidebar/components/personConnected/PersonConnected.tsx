"use client";
import { Avatar, Popover } from "@nextui-org/react";
import { UserOption } from "./components";
import { LogOutIcon, SettingsIcon } from "@/shared/icons";

export function PersonConnected({}: PersonConnectedProps) {
    return (
        <div className="flex justify-center bg-transparent overflow-hidden">
            <Popover placement="right">
                <Popover.Trigger>
                    <Avatar
                        className=""
                        size="lg"
                        src="/images/avatar.png"
                        squared
                        pointer
                    />
                </Popover.Trigger>
                <Popover.Content css={{ minHeight: 80, borderRadius: 8, overflow: "hidden" }}>
                    <div className="">
                        <UserOption name="Paramètres" icon={<SettingsIcon />} />
                        <UserOption
                            name="Se déconnecter"
                            icon={<LogOutIcon />}
                        />
                    </div>
                </Popover.Content>
            </Popover>
        </div>
    );
}

type PersonConnectedProps = {};
