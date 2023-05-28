import * as express from "express";
import * as cors from "cors";
import * as session from "express-session";
import { routerPublication, routerNotification } from "./features";

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(
    session({
        secret: "rthgfdssdfnmq",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true },
    })
);

app.get("/", (request, response) => {
    // @ts-ignore
    request.session.isConnected = true
    console.log("/");
    
    console.log(request.session);
    // @ts-ignore
    response.send({ isConnect: request.session.isConnected });
});

app.get("/isConnected", (request, response) => {
    console.log("/isConnected");
    
    // @ts-ignore
    console.log(request.session.isConnected);
    // @ts-ignore
    response.send({ isConnect: request.session.isConnected });
});

app.use(routerPublication);
app.use(routerNotification);

app.listen(8000, () => {
    console.log("server running at port : 8000");
});

console.log("oakk");
