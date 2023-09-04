import { Router } from "express";
import UsuarioApp from "./routes/user.routes.js";
import HospedajeApp from "./routes/hospedajes.routes.js";
import ContratosApp from "./routes/contratos.routes.js";
import VuelosApp from "./routes/vuelos.routes.js"
import AutosApp from "./routes/autos.routes.js"
import { limitRequest } from "../../config/limit.js";
import { appVerify } from "../../config/Jwt.js";

const index = Router();
index.use(limitRequest());

index.use("/usuarios",UsuarioApp);
index.use("/vuelos",appVerify,VuelosApp)
index.use("/hospedajes",appVerify,HospedajeApp);
index.use("/contratos",appVerify,ContratosApp);
index.use("/autos",appVerify,AutosApp);

export default index;