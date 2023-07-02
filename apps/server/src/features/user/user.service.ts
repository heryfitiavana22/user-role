import { UserModel, defaultUserImg } from "./User"

export class UserService {
    constructor(private User: UserModel) {}

    findAll = () => {
        return this.User.find().populate<{ role: Role }>("role").exec()
    }

    findOne = (_id: string) => {
        return this.User.findById(_id).populate<{ role: Role }>("role").exec()
    }

    add = (user: User) => {
        const current = new this.User({
            email: user.email,
            name: user.name,
            imageURL: user.imageURL || defaultUserImg,
            role: user.role,
        })
        return current.save()
    }

    update = (user: User) => {
        return this.User.findOneAndUpdate({ _id: user._id }, user, {
            new: true,
        }).exec()
    }

    delete = (_id: string) => {
        return this.User.findOneAndDelete({ _id }).exec()
    }
}
