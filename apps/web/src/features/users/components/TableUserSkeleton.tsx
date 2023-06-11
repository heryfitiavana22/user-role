import { Td } from "@/shared"
import Skeleton from "react-loading-skeleton"

export function TableUserSkeleton() {
    return (
        <>
            {[0, 1, 2, 3].map((v) => (
                <tr key={v}>
                    <Td>
                        <div className="flex items-center space-x-3">
                            <div>
                                <div className=" w-12 h-12 flex">
                                    <Skeleton
                                        containerClassName="block w-full h-full"
                                        className="block w-full h-full"
                                        borderRadius={"50px"}
                                    />
                                </div>
                            </div>
                            <div className="grid w-full gap-2">
                                <div className="w-2/3">
                                    <Skeleton
                                        containerClassName="block w-full h-full"
                                        className="block w-full h-full"
                                    />
                                </div>
                                <div className="w-2/4">
                                    <Skeleton
                                        containerClassName="block"
                                        className="block w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
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

type TableUserSkeletonProps = {}
