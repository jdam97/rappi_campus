import dotenv from "dotenv";
import express from "express";
import UsuarioApp from "./Api/V1/routes/user.routes.js";
import HospedajeApp from "./Api/V1/routes/hospedajes.routes.js";
dotenv.config("../");

const app = express();
app.use(express.json());
app.use(limitRequest());

app.use("/usuarios",UsuarioApp);
app.use("/hospedajes",HospedajeApp);

let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});