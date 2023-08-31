import { Router } from "express"
import * as vuelosConsulta from "../controller/VuelosController.js";
import { vSchema } from "../helpers/validationSchema.js";
// import { VuelosSchema } from "../middleware/Vuelos.js";

const VuelosApp = Router();

VuelosApp.get("/",vuelosConsulta.getAllVuelos);
VuelosApp.get("/:vuelosID",vuelosConsulta.getVuelosById);
VuelosApp.post("/",vuelosConsulta.createVuelos);
VuelosApp.delete("/:_id",vuelosConsulta.deleteVuelos)

export default VuelosApp;