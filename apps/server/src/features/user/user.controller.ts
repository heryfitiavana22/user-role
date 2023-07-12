import { Request, Response } from "express"
import { UserService } from "./user.service"

export class UserController {
    constructor(private service: UserService) {}

    getAll = async (request: Request, response: Response) => {
        const data = await this.service.findAll()
        response.send(data)
    }

    getAllBy = async (
        request: Request<KeyValue<UserKeys>>,
        response: Response
    ) => {
        const { key, value } = request.params
        const data = await this.service.findAllBy(key, value)
        response.send(data)
    }

    getOneById = async (request: Request<{ id: string }>, response: Response) => {
        const data = await this.service.findOneById(request.params.id)
        response.send(data)
    }

    getOneByEmail = async (request: Request<{ email: string }>, response: Response) => {
        const data = await this.service.findOneById(request.params.email)
        response.send(data)
    }

    add = async (request: Request<{}, {}, User>, response: Response) => {
        const data = await this.service.add(request.body)
        response.send(data)
    }

    updateOneById = async (
        request: Request<{}, {}, User>,
        response: Response
    ) => {
        const data = await this.service.updateOneById(request.body)
        response.send(data)
    }

    deleteOneById = async (
        request: Request<{ id: string }>,
        response: Response
    ) => {
        const data = await this.service.deleteOneById(request.params.id)
        response.send(data)
    }
}
