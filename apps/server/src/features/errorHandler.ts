import { NextFunction, Request, Response } from "express"

export function errorHandler(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
) {
    if (error.message == errorMessage.actionPermissionInvalid)
        response
            .status(400)
            .send({ error: errorMessage.actionPermissionInvalid })
    next()
}

export const errorMessage = {
    actionPermissionInvalid: "Invalid action",
} as const
