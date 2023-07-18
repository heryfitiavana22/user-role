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

export function concatAccess({ permissions }: Permissons) {
    // concatener le nom de l'acces avec chaque CRUD qu'il en a
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

export function isServiceActionInPermissionsFlatted(
    service: string,
    action: string,
    permissions: string
) {
    return permissions.includes(`${action} ${service.toLowerCase()}`)
}

type Permissons = {
    permissions: Permission[]
}
