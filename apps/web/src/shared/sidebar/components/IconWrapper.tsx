"use client";
import { PropsWithChildren, ComponentProps } from "react";
import classNames from "classnames";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

export function IconWrapper({
    name,
    children,
    href,
    isActive = false,
}: IconWrapperProps) {
    return (
        <Tooltip content={name} placement="right" color={"secondary"}>
            <Link href={href}>
                <div
                    className={classNames(
                        "flex justify-center items-center h-12 p-2 my-1 text-slate-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-violet-300 md:hover:bg-violet-200 md:w-12",
                        {
                            "bg-violet-100": isActive,
                        }
                    )}
                >
                    <span>{children}</span>
                    <span className="ml-2 md:hidden">{name}</span>
                </div>
            </Link>
        </Tooltip>
    );
}

type IconWrapperProps = PropsWithChildren<{
    isActive?: boolean;
    name: string;
    href: string
}>;
