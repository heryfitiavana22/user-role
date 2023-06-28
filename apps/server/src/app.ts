import * as express from "express"
import * as cors from "cors"
import * as dotenv from "dotenv"
import { userRouter, roleRouter } from "./features"
import { connectToDatabase } from "./config"

const app = express()
dotenv.config()
connectToDatabase()

app.use(cors())
app.use("/static", express.static("public"))
app.use(express.json())

app.get("/", (request, response) => {
    response.send({})
})

app.use(userRouter)
app.use(roleRouter)
// app.use(errorHandler)

app.listen(8000, () => {
    console.log("server running at port : 8000")
})
