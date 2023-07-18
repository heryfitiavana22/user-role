import { servicesList } from "data"

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

export function isRoleNameExisted(roles: Role[], currentRole: Role) {
    for (let role of roles) {
        if (role.name.toLowerCase() == currentRole.name.toLowerCase())
            return true
    }
    return false
}

export function isCorrectRole(role: Role) {
    return role.name.length > 0 && checkIfActionsCorret(role)
}

export function isCorrectService(service: string) {
    return service.length > 0 && servicesList.includes(service)
}

export function checkIfActionsCorret(role: Role) {
    for (let permission of role.permissions) {
        if (!isCorrectService(permission.service)) return false
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
