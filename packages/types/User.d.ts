declare interface User {
    _id: string
    name: string
    email: string
    role: Role
    imageURL: string
}

declare type UserKeys = keyof User
