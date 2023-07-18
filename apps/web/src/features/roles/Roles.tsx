"use client"
import {
    DeleteIcon,
    EditIcon,
    Table,
    TableAction,
    Td,
    Wrapper,
    Loading,
    useUserConnected,
} from "@/shared"
import { PropsWithChildren } from "react"
import { flatRolesAccess } from "./roles.helper"
import { TableRoleSkeleton, TableRow } from "./components"
import { useRoles } from "./hooks"
import { services } from "data"

export function Roles({}: RolesProps) {
    const column = ["Rôle", "Accès", "action"]
    const { roles, isLoading, isRemoving, onDelete } = useRoles()
    const { ability } = useUserConnected()

    return (
        <Wrapper>
            <Table
                column={column}
                Suspense={TableRoleSkeleton}
                isLoading={isLoading}
                data={flatRolesAccess(roles)}
                displayRow={(role) => (
                    <TableRow
                        role={role}
                        onDelete={() => onDelete(role._id)}
                        canEdit={ability.can("update", services.roles)}
                        canDelete={ability.can("delete", services.roles)}
                    />
                )}
            />
            {isRemoving && <Loading />}
        </Wrapper>
    )
}

type RolesProps = PropsWithChildren<{}>
