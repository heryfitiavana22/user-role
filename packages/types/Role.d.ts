declare interface Role {
    _id: string
    name: string
    permissions: {
        resource: string
        actions: CustomCRUD[]
    }
}

declare type CustomCRUD = "create" | "read" | "update" | "delete" | "all"
