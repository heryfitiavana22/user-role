import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private service: UserService) {}

  getAll = async (request: Request, response: Response) => {
    const data = await this.service.findAll();
    response.send(data);
  };

  getOne = async (request: Request<{ id: string }>, response: Response) => {
    const data = await this.service.findOne(request.params.id);
    response.send(data);
  };

  add = async (request: Request<{}, {}, User>, response: Response) => {
    const data = await this.service.add(request.body);
    response.send(data);
  };

  update = async (request: Request<{}, {}, User>, response: Response) => {
    const data = await this.service.update(request.body);
    response.send(data);
  };

  delete = async (request: Request<{ id: string }>, response: Response) => {
    const data = await this.service.delete(request.params.id);
    response.send(data);
  };
}
