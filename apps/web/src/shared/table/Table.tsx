import { Button } from "../button"
import { ChevronLeft, ChevronRight } from "../icons"
import { Th } from "./components"

export function Table<T>({ column, data, displayRow }: TableProps<T>) {
    return (
        <div className="overflow-x-auto overflow-y-hidden">
            <table className="table w-full">
                <thead>
                    <tr>
                        {column.map((c, k) => (
                            <Th key={k}>{c}</Th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, k) => (
                        <tr key={k}>{displayRow(item)}</tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end w-full mt-4">
                <div className="join">
                    <Button color={"secondary"} className="join-item">
                        <ChevronLeft />
                    </Button>
                    <div className="grid place-items-center bg-secondary text-white px-2 join-item">
                        Pages 1 of 2
                    </div>
                    <Button color={"secondary"} className="join-item">
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

type TableProps<T> = {
    column: string[]
    data: T[]
    displayRow: (row: T) => React.ReactNode
}
