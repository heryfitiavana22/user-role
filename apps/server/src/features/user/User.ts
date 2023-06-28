import { Schema, model } from "mongoose"

type IUser = Pick<User, "email" | "imageURL" | "name"> & {
    role: any
}
export const defaultUserImg = "/images/user/avatar.png"

const user = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        default: defaultUserImg,
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: "Role",
    },
})

export const User = model("User", user)

export type UserModel = typeof User
