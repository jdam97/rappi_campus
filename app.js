import dotenv from "dotenv";
import express from "express";
import UsuarioApp from "./Api/V1/routes/user.routes.js";
import HospedajeApp from "./Api/V1/routes/hospedajes.routes.js";
import ContratosApp from "./Api/V1/routes/contratos.routes.js";
import VuelosApp from "./Api/V1/routes/vuelos.routes.js"
import { limitRequest } from "./Api/V1/config/limit.js";

dotenv.config("../");

const app = express();
app.use(express.json());
app.use(limitRequest());

app.use("/usuarios",UsuarioApp);
app.use("/vuelos",VuelosApp)
app.use("/hospedajes",HospedajeApp);
app.use("/contratos",ContratosApp);

let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});