import { Router } from "express";
import * as autosConsulta from "../controller/AutosController.js"
import { vSchema } from "../../../helpers/validationSchema.js";
import passportHelper from "../../../helpers/passportLogin.js"

const AutosApp = Router();

//Get All
AutosApp.use(passportHelper.authenticate('bearer', {session: false}));

AutosApp.get("/",autosConsulta.getAllAutos);
AutosApp.get("/:autosId",autosConsulta.getAutosById)
AutosApp.post("/",autosConsulta.createAutos);
AutosApp.delete("/:_id",autosConsulta.deleteAutos);
AutosApp.put("/:_id",autosConsulta.updateAutos)
export default AutosApp;