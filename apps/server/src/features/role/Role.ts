import { Schema, model } from "mongoose"

const role = new Schema<Role>({
    name: String,
    permissions: [
        {
            resource: String,
            actions: [String],
        },
    ],
})

export const Role = model("Role", role)

export type RoleModel = typeof Role
