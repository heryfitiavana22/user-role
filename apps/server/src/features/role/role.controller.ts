import { Request, Response } from "express"
import { RoleService } from "./role.service"
import { isCorrectRole, formatActionAll } from "./role.helper"
import { errorMessage } from "../errorHandler"

export class RoleController {
    constructor(private service: RoleService) {}

    getAll = async (request: Request, response: Response) => {
        const roles = await this.service.findAll()
        response.send(roles)
    }

    getOne = async (request: Request<{ id: string }>, response: Response) => {
        const role = await this.service.findOne(request.params.id)
        response.send(role)
    }

    add = async (request: Request<{}, {}, Role>, response: Response) => {
        const isCorrect = isCorrectRole(request.body)
        if (isCorrect) {
            const roleFormatted = formatActionAll(request.body)
            const newRole = await this.service.add(roleFormatted)
            return response.send(newRole)
        }
        response
            .status(400)
            .send({ error: errorMessage.actionPermissionInvalid })
    }

    update = async (request: Request<{}, {}, Role>, response: Response) => {
        const isCorrect = isCorrectRole(request.body)
        if (isCorrect) {
            const roleFormatted = formatActionAll(request.body)
            const updated = await this.service.update(roleFormatted)
            return response.send(updated)
        }
        response
            .status(400)
            .send({ error: errorMessage.actionPermissionInvalid })
    }

    delete = async (request: Request<{ id: string }>, response: Response) => {
        const deleted = await this.service.delete(request.params.id)
        response.send(deleted)
    }
}
