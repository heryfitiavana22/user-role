export function getAllAction(): CustomCRUD[] {
    return ["create", "read", "update", "delete"]
}

export function formatActionAll(role: Role): Role {
    const permissions = role.permissions
    return {
        ...role,
        permissions: permissions.map((permission) => {
            if (permission.actions.includes("all"))
                return {
                    ...permission,
                    actions: getAllAction(),
                }
            return permission
        }),
    }
}

export function isCorrectRole(role: Role) {
    return role.name.length > 0 && checkIfActionsCorret(role)
}

export function checkIfActionsCorret(role: Role) {
    for (let permission of role.permissions) {
        if (permission.service.length == 0) return false
        for (let action of permission.actions) {
            if (
                action !== "create" &&
                action !== "delete" &&
                action !== "read" &&
                action !== "update" &&
                action !== "all"
            )
                return false
        }
    }

    return true
}
