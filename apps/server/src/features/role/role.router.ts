import * as express from "express";
import { RoleService } from "./role.service";
import { Role } from "./Role";
import { RoleController } from "./role.controller";
import { apiURL } from "api-url";

const router = express.Router();
const roleService = new RoleService(Role);
const roleController = new RoleController(roleService);
const roleURL = apiURL.role;

router.get(roleURL, roleController.getAll);
router.get(roleURL + ":id", roleController.getOne);
router.post(roleURL, roleController.add);
router.put(roleURL, roleController.update);
router.delete(roleURL + ":id", roleController.delete);

export const roleRouter = router;
