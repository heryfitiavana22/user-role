import { Request, Response } from 'express'
import { RoleService } from './role.service'

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
        const newRole = await this.service.add(request.body)
        response.send(newRole)
    }

    update = async (request: Request<{}, {}, Role>, response: Response) => {
        const updated = await this.service.update(request.body)
        response.send(updated)
    }

    delete = async (request: Request<{ id: string }>, response: Response) => {
        const deleted = await this.service.delete(request.params.id)
        response.send(deleted)
    }
}
