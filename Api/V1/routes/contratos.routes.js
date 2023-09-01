import { Router } from "express";
import * as ContratosConsultas from "../controller/ContratosController.js";
import { vSchema } from "../helpers/validationSchema.js";


const ContratosApp = Router();

ContratosApp.get("/", ContratosConsultas.getContratosById);
ContratosApp.get("/:ContratosID", ContratosConsultas.getContratosById);
ContratosApp.post("/",vSchema(ContratosSchema),ContratosConsultas.createContratos);

export default ContratosApp;