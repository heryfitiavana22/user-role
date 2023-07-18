import { Request, Response } from "express"
import { RoleService } from "./role.service"
import {
    isCorrectRole,
    formatActionAll,
    isRoleNameExisted,
    isSameRoleName,
} from "./role.helper"
import { errorMessage } from "../errorHandler"
import { isSuperAdmin } from "functions"

export class RoleController {
    constructor(private service: RoleService) {}

    getAll = async (request: Request, response: Response) => {
        const roles = await this.service.findAll()
        response.send(roles)
    }

    getAllBy = async (
        request: Request<KeyValue<RoleKeys>>,
        response: Response
    ) => {
        const { key, value } = request.params
        const data = await this.service.findAllBy(key, value)
        response.send(data)
    }

    getOneById = async (
        request: Request<{ id: string }>,
        response: Response
    ) => {
        const role = await this.service.findOneById(request.params.id)
        response.send(role)
    }

    add = async (request: Request<{}, {}, Role>, response: Response) => {
        const currentRole = request.body
        const roles = await this.service.findAll()
        if (isRoleNameExisted(roles, currentRole))
            return response
                .status(400)
                .send({ message: errorMessage.roleExisted })
        const isCorrect = isCorrectRole(currentRole)
        if (!isCorrect)
            return response
                .status(400)
                .send({ message: errorMessage.incorrectRole })

        const roleFormatted = formatActionAll(currentRole)
        const newRole = await this.service.add(roleFormatted)
        response.send(newRole)
    }

    updateOneById = async (
        request: Request<{}, {}, Role>,
        response: Response
    ) => {
        const currentRole = request.body
        const roleFind = await this.service.findOneBy("name", currentRole.name)
        if (roleFind && roleFind._id.toString() !== currentRole._id.toString())
            return response
                .status(400)
                .send({ message: errorMessage.roleExisted })
        const isCorrect = isCorrectRole(currentRole)
        if (!isCorrect)
            return response
                .status(400)
                .send({ message: errorMessage.incorrectRole })

        const roleFormatted = formatActionAll(currentRole)
        const updated = await this.service.updateOneById(roleFormatted)
        response.send(updated)
    }

    deleteOneById = async (
        request: Request<{ id: string }>,
        response: Response
    ) => {
        const _id = request.params.id
        const roleFind = await this.service.findOneById(_id)
        if (roleFind && isSuperAdmin(roleFind as any))
            return response
                .status(401)
                .send({ message: errorMessage.cannotDeleteRole })
        const deleted = await this.service.deleteOneById(_id)
        response.send(deleted)
    }
}
