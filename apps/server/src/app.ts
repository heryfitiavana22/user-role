import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";
import { userRouter } from "./features";
import { connectToDatabase } from "./config";

const app = express();
dotenv.config();
connectToDatabase()

app.use(cors());
app.use(express.static("public"));

app.get("/", (request, response) => {
    response.send({});
});

app.use(userRouter);

app.listen(8000, () => {
    console.log("server running at port : 8000");
});
