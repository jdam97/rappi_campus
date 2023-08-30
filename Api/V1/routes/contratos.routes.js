import { Router } from "express";
import * as ContratosConsultas from "../controller/ContratosController.js";
import { vSchema } from "../helpers/validationSchema";

const ContratosApp = Router();

ContratosApp.get("/", ContratosConsultas.getContratosById);
ContratosApp.get("/:ContratosID", ContratosConsultas.getContratosById);
ContratosApp.post("/",ContratosConsultas.createContratos);

export default ContratosApp;