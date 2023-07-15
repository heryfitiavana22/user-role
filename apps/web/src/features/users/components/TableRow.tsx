import { Routes } from "@/Routes"
import { Td, staticURL, TableAction, EditIcon, DeleteIcon } from "@/shared"
import { isSuperAdmin } from "functions"
import { PropsWithChildren } from "react"
import Image from "next/image"

export function TableRow({ user, onDelete }: TableRowProps) {
    const superAdmin = isSuperAdmin(user.role)

    return (
        <tr>
            <Td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <Image
                                src={staticURL(user.imageURL)}
                                alt=""
                                width={"100"}
                                height={"100"}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                </div>
            </Td>
            <Td>{user.role.name}</Td>
            <Td>
                <div className="flex gap-2">
                    <TableAction
                        type="edit"
                        href={
                            superAdmin ? undefined : Routes.editUser(user._id)
                        }
                        disabled={superAdmin}
                    >
                        <EditIcon />
                    </TableAction>
                    <TableAction type="delete" disabled={superAdmin}>
                        <DeleteIcon
                            onClick={superAdmin ? undefined : onDelete}
                        />
                    </TableAction>
                </div>
            </Td>
        </tr>
    )
}

type TableRowProps = PropsWithChildren<{
    user: User
    onDelete: () => void
}>
