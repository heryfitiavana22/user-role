import { Schema, model } from "mongoose"

type IUser = Pick<User, "email" | "imageURL" | "name"> & {
    role: any
}

const user = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: "Role",
    },
})

export const User = model("User", user)

export type UserModel = typeof User
