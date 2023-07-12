declare interface Role {
    _id: string
    name: string
    permissions: Permission[]
}

declare type Permission = {
    service: string
    actions: CustomCRUD[]
}

declare type CustomCRUD = "create" | "read" | "update" | "delete" | "all"

declare type RoleKeys = keyof Role
