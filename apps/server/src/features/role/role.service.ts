import { RoleModel } from "./Role";

export class RoleService {
  constructor(private Role: RoleModel) {}

  findAll = () => {
    return this.Role.find().exec();
  };

  findOne = (_id: string) => {
    return this.Role.findById(_id).exec();
  };

  add = (role: Role) => {
    const currentRole = new this.Role({
      name: role.name,
      permissions: role.permissions,
    });
    return currentRole.save();
  };

  update = (role: Role) => {
    return this.Role.findOneAndUpdate({ _id: role._id }, role, {
      new: true,
    }).exec();
  };

  delete = (_id: string) => {
    return this.Role.findOneAndDelete({ _id }).exec();
  };
}
