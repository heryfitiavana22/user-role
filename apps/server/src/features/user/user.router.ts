import * as express from "express"
import { UserService } from "./user.service"
import { User } from "./User"
import { UserController } from "./user.controller"
import { apiURL } from "api-url"

const router = express.Router()
const userService = new UserService(User)

const userController = new UserController(userService)
const userURL = apiURL.user

router.get(userURL, userController.getAll)
router.get(userURL + "/:id", userController.getOne)
router.post(userURL, userController.add)
router.put(userURL, userController.update)
router.delete(`${userURL}/:id`, userController.delete)

router.get("/testt", userController.getAll)

export const userRouter = router
