import * as express from "express"
import { addUser, deleteUser, getUser, getUsers, updateUser } from "../controllers"

const router = express.Router()

router.get("/user", getUsers)
router.get("/user/:id", getUser)
router.post("/user/", addUser)
router.put("/user", updateUser)
router.delete("/user", deleteUser)

export const userRouter = router