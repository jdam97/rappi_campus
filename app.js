import dotenv from "dotenv";
import express from "express";
import routesVersioning from "express-routes-versioning";
import index from "./Api/V1/index.js";
dotenv.config("../");

const app = express();
const version =routesVersioning();
app.use(express.json());

app.use("/", version({
    "~1.0.0":index,
}));


let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});