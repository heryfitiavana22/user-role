import { Request, Response } from "express"
import { RoleService } from "./role.service"
import { isCorrectRole, formatActionAll } from "./role.helper"
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
        const isCorrect = isCorrectRole(request.body)
        if (!isCorrect)
            return response
                .status(400)
                .send({ error: errorMessage.actionPermissionInvalid })

        const roleFormatted = formatActionAll(request.body)
        const newRole = await this.service.add(roleFormatted)
        response.send(newRole)
    }

    updateOneById = async (
        request: Request<{}, {}, Role>,
        response: Response
    ) => {
        const isCorrect = isCorrectRole(request.body)
        if (!isCorrect)
            return response
                .status(400)
                .send({ error: errorMessage.actionPermissionInvalid })

        const roleFormatted = formatActionAll(request.body)
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
                .send({ message: "Cannot delete superadmin" })
        const deleted = await this.service.deleteOneById(_id)
        response.send(deleted)
    }
}
