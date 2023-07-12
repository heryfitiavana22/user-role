import { RoleModel } from "./Role"

export class RoleService {
    constructor(private Role: RoleModel) {}

    findAll = () => {
        return this.Role.find().exec()
    }

    findAllBy = (by: RoleKeys, value: string) => {
        return this.Role.find({ [by]: value }).exec()
    }

    findOneById = (_id: string) => {
        return this.Role.findById(_id).exec()
    }

    add = (role: Role) => {
        const currentRole = new this.Role({
            name: role.name,
            permissions: role.permissions,
        })
        return currentRole.save()
    }

    updateOneById = (role: Role) => {
        return this.Role.findOneAndUpdate({ _id: role._id }, role, {
            new: true,
        }).exec()
    }

    deleteOneById = (_id: string) => {
        return this.Role.findOneAndDelete({ _id }).exec()
    }
}
