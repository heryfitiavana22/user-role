import { Request, Response } from "express";

export function getUser(
    request: Request<{
        id: string;
    }>,
    response: Response
) {
    response.send({})
}
