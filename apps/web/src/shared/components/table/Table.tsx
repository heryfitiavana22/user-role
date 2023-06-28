import React from "react"
import { Button } from "../button"
import { ChevronLeft, ChevronRight } from "../icons"
import { Th } from "./components"
import "./table.css"
import classNames from "classnames"

export function Table<T>({
    column,
    data,
    isLoading = false,
    className,
    Suspense,
    displayRow,
}: TableProps<T>) {
    return (
        <div className="overflow-x-auto overflow-y-hidden">
            <table className={classNames("table w-full", className)}>
                <thead>
                    <tr>
                        {column.map((c, k) => (
                            <Th key={k}>{c}</Th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {isLoading || !data ? (
                        <Suspense />
                    ) : (
                        data.map((item, k) => (
                            <React.Fragment key={k}>
                                {displayRow(item)}
                            </React.Fragment>
                        ))
                    )}
                </tbody>
            </table>
            <div className="flex justify-end w-full mt-4">
                <div className="join">
                    <Button className="join-item">
                        <ChevronLeft />
                    </Button>
                    <div className="grid place-items-center bg-primary text-white px-2 join-item">
                        Pages 1 of 2
                    </div>
                    <Button className="join-item">
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

type TableProps<T> = {
    column: string[]
    data?: T[]
    displayRow: (row: T) => React.ReactNode
    isLoading?: boolean
    Suspense: () => JSX.Element
    className?: string
}
