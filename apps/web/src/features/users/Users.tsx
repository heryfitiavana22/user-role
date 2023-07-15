"use client"
import { Loading, Table, Wrapper } from "@/shared"
import { TableRow, TableUserSkeleton } from "./components"
import { useUsers } from "./hooks"

export function Users({}: UsersProps) {
    const column = ["Nom", "Rôles", "Action"]
    const { users, isLoading, isRemoving, onDelete } = useUsers()

    return (
        <Wrapper>
            <Table
                column={column}
                data={users}
                Suspense={TableUserSkeleton}
                isLoading={isLoading}
                displayRow={(user) => (
                    <TableRow user={user} onDelete={() => onDelete(user._id)} />
                )}
            />
            {isRemoving && <Loading />}
        </Wrapper>
    )
}

type UsersProps = {}
