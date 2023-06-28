"use client"
import {
    DeleteIcon,
    EditIcon,
    Table,
    TableAction,
    Td,
    Wrapper,
    Loading,
} from "@/shared"
import { PropsWithChildren } from "react"
import { flatRolesAccess } from "./roles.helper"
import { TableRoleSkeleton } from "./components"
import { Routes } from "@/Routes"
import { useRoles } from "./hooks"

export function Roles({}: RolesProps) {
    const column = ["Rôle", "Accès", "action"]
    const { roles, isLoading, isRemoving, onDelete } = useRoles()

    return (
        <Wrapper>
            <Table
                column={column}
                Suspense={TableRoleSkeleton}
                isLoading={isLoading}
                data={flatRolesAccess(roles)}
                displayRow={(role) => (
                    <tr>
                        <Td className="font-bold">{role.name}</Td>
                        <Td>{role.access}</Td>
                        <Td>
                            <div className="flex gap-2">
                                <TableAction
                                    type="edit"
                                    href={Routes.editRole(role._id)}
                                >
                                    <EditIcon />
                                </TableAction>
                                <TableAction type="delete">
                                    <DeleteIcon
                                        onClick={() => onDelete(role._id)}
                                    />
                                </TableAction>
                            </div>
                        </Td>
                    </tr>
                )}
            />
            {isRemoving && <Loading />}
        </Wrapper>
    )
}

type RolesProps = PropsWithChildren<{}>
