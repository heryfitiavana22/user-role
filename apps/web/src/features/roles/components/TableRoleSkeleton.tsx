import { PropsWithChildren } from "react"
import { Td } from "@/shared"
import Skeleton from "react-loading-skeleton"

export function TableRoleSkeleton() {
    return (
        <>
            {[0, 1, 2, 3].map((v) => (
                <tr key={v}>
                    <Td>
                        <Skeleton
                            containerClassName="block w-full h-full"
                            className="block w-full h-full"
                        />
                    </Td>
                    <Td>
                        <Skeleton
                            containerClassName="block w-full h-full"
                            className="block w-full h-full"
                        />
                    </Td>
                    <Td>
                        <div className="flex gap-2">
                            <Skeleton width={24} height={24} />
                            <Skeleton width={24} height={24} />
                        </div>
                    </Td>
                </tr>
            ))}
        </>
    )
}
