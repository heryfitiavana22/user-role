import { Routes } from "@/Routes"
import { Td, TableAction, EditIcon, DeleteIcon } from "@/shared"
import { PropsWithChildren } from "react"

export function TableRow({
    role,
    onDelete,
    canDelete,
    canEdit,
}: TableRowProps) {
    return (
        <tr>
            <Td className="font-bold">{role.name}</Td>
            <Td className="w-4/5">
                <div className="h-10 overflow-hidden text-ellipsis">
                    {role.access}
                </div>
            </Td>
            <Td>
                <div className="flex gap-2">
                    <TableAction type="edit" href={Routes.editRole(role._id)}>
                        <EditIcon />
                    </TableAction>
                    <TableAction type="delete">
                        <DeleteIcon onClick={onDelete} />
                    </TableAction>
                </div>
            </Td>
        </tr>
    )
}

type TableRowProps = PropsWithChildren<{
    role: FlatRole
    onDelete: () => void
    canEdit: boolean
    canDelete: boolean
}>
