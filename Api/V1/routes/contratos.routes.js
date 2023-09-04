import { Router } from "express";
import * as ContratosConsultas from "../controller/ContratosController.js";
import { vSchema } from "../../../helpers/validationSchema.js";
import {ContratosSchema} from "../../../middleware/Contratos.js"
import passportHelper from "../../../helpers/passportLogin.js"



const ContratosApp = Router();

ContratosApp.use(passportHelper.authenticate('bearer', {session: false}));

ContratosApp.get("/", ContratosConsultas.getAllContratos);
ContratosApp.get("/:ContratosID", ContratosConsultas.getContratosById);
ContratosApp.post("/",vSchema(ContratosSchema),ContratosConsultas.createContratos);
ContratosApp.delete("/:_id",ContratosConsultas.deleteContratos);
ContratosApp.put("/:_id", ContratosConsultas.updateContratos)
export default ContratosApp;