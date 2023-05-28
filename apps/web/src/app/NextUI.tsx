"use client";
import { NextUIProvider, useSSR } from "@nextui-org/react";
import { PropsWithChildren } from "react";

export function NextUI({ children }: NextUIProps) {
    const { isBrowser } = useSSR();

    return isBrowser ? <NextUIProvider>{children}</NextUIProvider> : <></>;
}

type NextUIProps = PropsWithChildren<{}>;
