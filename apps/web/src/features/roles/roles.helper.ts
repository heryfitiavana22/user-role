// [read newLetter, post newsLetter, ...]
export function flatRolesAccess(roles?: Role[]) {
    if (!roles) return undefined

    return roles.map((role) => {
        return {
            _id: role._id,
            name: role.name,
            access: concatAccess({ permissions: role.permissions }),
        }
    }) as FlatRole[]
}

function concatAccess({ permissions }: Permissons) {
    // concatener le nom de l'acces avec le CRUD qu'il en a
    return permissions
        .map((permission) =>
            permission.actions
                .map(
                    (action) => `${action} ${permission.service.toLowerCase()}`
                )
                .join(", ")
        )
        .join(", ")
}

export function isServiceActionInRolesFlatted(
    service: string,
    action: string,
    rolesFlatted?: FlatRole[]
) {
    if (!rolesFlatted) return false

    return (
        rolesFlatted.filter((role) =>
            role.access.includes(`${action} ${service.toLowerCase()}`)
        ).length > 0
    )
}

type FlatRole = {
    _id: string
    name: string
    access: string
}

type Permissons = {
    permissions: Permission[]
}
