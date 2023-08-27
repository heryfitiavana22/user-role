import { PropsWithChildren } from "react"
import { Button } from "../button"
import { ChevronLeft, ChevronRight } from "../icons"

export function Pagination({
    count,
    currentPage,
    nextPage,
    prevPage,
}: PaginationProps) {
    return (
        <div className="flex justify-end w-full mt-4">
            <div className="join">
                <Button
                    className="join-item"
                    onClick={prevPage}
                    disabled={currentPage <= 1}
                >
                    <ChevronLeft />
                </Button>
                <div className="grid place-items-center bg-primary text-white px-2 join-item">
                    Pages {currentPage} of {count}
                </div>
                <Button
                    className="join-item"
                    onClick={nextPage}
                    disabled={currentPage >= count}
                >
                    <ChevronRight />
                </Button>
            </div>
        </div>
    )
}

type PaginationProps = PropsWithChildren<{
    count: number
    currentPage: number
    prevPage: () => void
    nextPage: () => void
}>
