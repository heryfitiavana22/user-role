import * as express from "express"
import { RoleService } from "./role.service"
import { Role } from "./Role"
import { RoleController } from "./role.controller"
import { KeyValue, apiURL } from "api-url"

const router = express.Router()
const roleService = new RoleService(Role)
const roleController = new RoleController(roleService)
const roleURL = apiURL.role

router.get(roleURL, roleController.getAll)
router.get(roleURL + KeyValue, roleController.getAllBy)
router.get(roleURL + "/:id", roleController.getOneById)
router.post(roleURL, roleController.add)
router.put(roleURL, roleController.updateOneById)
router.delete(roleURL + "/:id", roleController.deleteOneById)

export const roleRouter = router
