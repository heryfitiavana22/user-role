"use client"
import {
    DeleteIcon,
    EditIcon,
    Table,
    TableAction,
    Td,
    getAllData,
    staticURL,
} from "@/shared"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { TableUserSkeleton } from "./components"

export function Users({}: UsersProps) {
    const column = ["Nom", "Rôles", "Action"]
    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: () => getAllData<User>("user"),
    })

    return (
        <div className="mt-5">
            <div className="w-full">
                <Table
                    column={column}
                    data={data}
                    Suspense={TableUserSkeleton}
                    isLoading={isLoading}
                    displayRow={(user) => (
                        <tr>
                            <Td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={staticURL(user.imageURL)}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {user.name}
                                        </div>
                                        <div className="text-sm opacity-50">
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            </Td>
                            <Td>{user.role.name}</Td>
                            <Td>
                                <div className="flex gap-2">
                                    <TableAction
                                        className="text-blue-400"
                                        href={`users/edit/` + user._id}
                                        datatip="Modifier"
                                    >
                                        <EditIcon />
                                    </TableAction>
                                    <TableAction
                                        className="text-red-400"
                                        href="#"
                                        datatip="Supprimer"
                                    >
                                        <DeleteIcon />
                                    </TableAction>
                                </div>
                            </Td>
                        </tr>
                    )}
                />
            </div>
        </div>
    )
}

type UsersProps = {}
