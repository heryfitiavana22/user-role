"use client"
import {
    DeleteIcon,
    EditIcon,
    Table,
    TableAction,
    Td,
    Wrapper,
    getAllData,
    staticURL,
} from "@/shared"
import { useQuery } from "@tanstack/react-query"
import { TableUserSkeleton } from "./components"
import { Routes } from "@/Routes"

export function Users({}: UsersProps) {
    const column = ["Nom", "Rôles", "Action"]
    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: () => getAllData<User>("user"),
    })

    return (
        <Wrapper>
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
                                        <img src={staticURL(user.imageURL)} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{user.name}</div>
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
                                    type="edit"
                                    href={Routes.editUser(user._id)}
                                >
                                    <EditIcon />
                                </TableAction>
                                <TableAction type="delete" href="#">
                                    <DeleteIcon />
                                </TableAction>
                            </div>
                        </Td>
                    </tr>
                )}
            />
        </Wrapper>
    )
}

type UsersProps = {}
