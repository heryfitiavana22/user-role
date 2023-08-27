"use client"
import { Loading, Pagination, Table, Wrapper, useUserConnected } from "@/shared"
import { TableRow, TableUserSkeleton } from "./components"
import { useUsers } from "./hooks"
import { services } from "data"

export function Users({}: UsersProps) {
    const column = ["Nom", "Rôles", "Action"]
    const { users, isLoading, isRemoving, page, onDelete, nextPage, prevPage } =
        useUsers()
    const { ability } = useUserConnected()

    return (
        <Wrapper>
            <Table
                column={column}
                data={users}
                Suspense={TableUserSkeleton}
                isLoading={isLoading}
                displayRow={(user) => (
                    <TableRow
                        user={user}
                        onDelete={() => onDelete(user._id)}
                        canDelete={ability.can("delete", services.users)}
                        canEdit={ability.can("update", services.users)}
                    />
                )}
            />
            <Pagination
                count={2}
                currentPage={page}
                nextPage={nextPage}
                prevPage={prevPage}
            />
            {isRemoving && <Loading />}
        </Wrapper>
    )
}

type UsersProps = {}
