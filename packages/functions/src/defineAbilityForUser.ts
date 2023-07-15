import { defineAbility } from "@casl/ability"

export function defineAbilityForUser(user: User) {
    return defineAbility((can, cannot) => {
        if (user.role) {
            user.role.permissions.forEach((permission) => {
                permission.actions.forEach((action) => {
                    can(action, permission.service)
                })
            })
        }
    })
}
