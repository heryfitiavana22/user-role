import { Request, Response } from "express"
import { UserService } from "./user.service"
import * as bcrypt from "bcrypt"
import { generatePassword } from "./user.helper"
import { isSuperAdmin } from "functions"
import { errorMessage } from "../errorHandler"
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

    getOneById = async (
        request: Request<{ id: string }>,
        response: Response
    ) => {
        const data = await this.service.findOneById(request.params.id)
        response.send(data)
    }

    isUserCorrect = async (
        request: Request<{}, {}, User>,
        response: Response
    ) => {
        const currentUser = request.body
        const userFind = await this.service.findOneByEmail(currentUser.email)
        const isPasswordCorrect = bcrypt.compareSync(
            currentUser.password,
            userFind.password
        )
        if (isPasswordCorrect) return response.send(userFind)
        response.status(401).send({ message: errorMessage.invalidPassword })
    }

    add = async (request: Request<{}, {}, User>, response: Response) => {
        const password = generatePassword()
        const currentUser: User = { ...request.body, password }
        const userFind = await this.service.findOneByEmail(currentUser.email)
        if (userFind)
            return response
                .status(401)
                .send({ message: errorMessage.emailExisted })
        const data = await this.service.add(currentUser)
        // TODO : send mail to user the password
        response.send(data)
    }

    updateOneById = async (
        request: Request<{}, {}, User>,
        response: Response
    ) => {
        const currentUser = request.body
        const userFind = await this.service.findOneByEmail(currentUser.email)
        if (userFind && userFind.email !== currentUser.email)
            return response
                .status(401)
                .send({ message: errorMessage.emailExisted })
        const data = await this.service.updateOneById(currentUser)
        response.send(data)
    }

    deleteOneById = async (
        request: Request<{ id: string }>,
        response: Response
    ) => {
        const userFind = await this.service.findOneById(request.params.id)
        if (userFind && isSuperAdmin(userFind.role))
            return response
                .status(401)
                .send({ message: errorMessage.cannotDeleteRole })
        const data = await this.service.deleteOneById(request.params.id)
        response.send(data)
    }
}
