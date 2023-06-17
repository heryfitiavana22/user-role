export function formatRolesAccess(roles?: Role[]) {
    if (!roles) return undefined

    return roles.map((role) => {
        return {
            name: role.name,
            access: concatAccess({ permissions: role.permissions }),
        }
    })
}

function concatAccess({ permissions }: Permissons) {
    // concatener le nom de l'acces avec le CRUD qu'il en a
    return permissions
        .map((permission) =>
            permission.actions
                .map((action) => `${action} ${permission.resource}`)
                .join(", ")
        )
        .join(", ")
}

type Permissons = {
    permissions: {
        resource: string
        actions: CustomCRUD[]
    }[]
}
