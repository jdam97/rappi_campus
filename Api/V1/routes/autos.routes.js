import { Router } from "express";
import * as autosConsulta from "../controller/AutosController.js"
import { vSchema } from "../helpers/validationSchema.js";

const AutosApp = Router();

//Get All

AutosApp.get("/",autosConsulta.getAllAutos);
AutosApp.get("/:autosId",autosConsulta.getAutosById)

export default AutosApp;