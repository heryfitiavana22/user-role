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
            .send({ message: errorMessage.actionPermissionInvalid })
    next()
}

export const errorMessage = {
    actionPermissionInvalid: "Invalid action",
    incorrectRole: "Rôle incorrect",
    roleExisted: "Rôle déjà existant",
    cannotDeleteRole: "Ne peut pas supprimer le superadmin",
    invalidPassword: "Mot de passe invalide",
    emailExisted: "Email déjà existant",
} as const
