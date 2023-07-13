import * as express from "express"
import { UserService } from "./user.service"
import { User } from "./User"
import { UserController } from "./user.controller"
import { KeyValue, apiURL } from "api-url"

const router = express.Router()
const userService = new UserService(User)

const userController = new UserController(userService)
const userURL = apiURL.user

router.get(userURL, userController.getAll)
router.get(userURL + KeyValue, userController.getAllBy)
router.get(userURL + "/:id", userController.getOneById)
router.post(userURL + "/iscorrect", userController.isUserCorrect)
router.post(userURL, userController.add)
router.put(userURL, userController.updateOneById)
router.delete(`${userURL}/:id`, userController.deleteOneById)

export const userRouter = router
