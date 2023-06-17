import { PropsWithChildren } from "react"

export function Wrapper({ children }: WrapperProps) {
    return (
        <div className="mt-5">
            <div className="w-full">{children}</div>
        </div>
    )
}

type WrapperProps = PropsWithChildren<{}>
