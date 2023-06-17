"use client"
import {
    DeleteIcon,
    EditIcon,
    Table,
    TableAction,
    Td,
    Wrapper,
    getAllData,
} from "@/shared"
import { useQuery } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import { formatRolesAccess } from "./roles.helper"
import { TableRoleSkeleton } from "./components"

export function Roles({}: RolesProps) {
    const column = ["Rôle", "Accès", "action"]
    const { isLoading, data } = useQuery({
        queryKey: ["roles"],
        queryFn: () => getAllData<Role>("role"),
    })

    return (
        <Wrapper>
            <Table
                column={column}
                Suspense={TableRoleSkeleton}
                isLoading={isLoading}
                data={formatRolesAccess(data)}
                displayRow={(role) => (
                    <tr>
                        <Td className="font-bold">{role.name}</Td>
                        <Td>{role.access}</Td>
                        <Td>
                            <div className="flex gap-2">
                                <TableAction type="edit" href={``}>
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

type RolesProps = PropsWithChildren<{}>
