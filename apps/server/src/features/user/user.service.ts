import { ROWS } from "data"
import { saltRound } from "../../config"
import { UserModel, defaultUserImg } from "./User"
import * as bcrypt from "bcrypt"

export class UserService {
    constructor(private User: UserModel) {}

    findAll = (page?: number) => {
        if (page)
            return this.User.find()
                .populate<{ role: Role }>("role")
                .skip((page - 1) * ROWS)
                .limit(ROWS)
                .exec()

        return this.User.find().populate<{ role: Role }>("role").exec()
    }

    findAllBy = (by: UserKeys, value: string) => {
        return this.User.find({ [by]: value })
            .populate<{ role: Role }>("role")
            .exec()
    }

    findOneById = (_id: string) => {
        return this.User.findById(_id).populate<{ role: Role }>("role").exec()
    }

    findOneByEmail = (email: string) => {
        return this.User.findOne({ email })
            .populate<{ role: Role }>("role")
            .exec()
    }

    add = (user: User) => {
        const password = bcrypt.hashSync(user.password, saltRound)
        const current = new this.User({
            email: user.email,
            name: user.name,
            imageURL: user.imageURL || defaultUserImg,
            role: user.role,
            password,
        })
        return current.save()
    }

    updateOneById = (user: User) => {
        return this.User.findOneAndUpdate({ _id: user._id }, user, {
            new: true,
        }).exec()
    }

    deleteOneById = (_id: string) => {
        return this.User.findOneAndDelete({ _id }).exec()
    }
}
