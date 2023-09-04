import { Router } from "express"
import * as vuelosConsulta from "../controller/VuelosController.js";
import passportHelper from "../../../helpers/passportLogin.js"
// import { VuelosSchema } from "../middleware/Vuelos.js";

const VuelosApp = Router();

VuelosApp.use(passportHelper.authenticate('bearer', {session: false}));

VuelosApp.get("/",vuelosConsulta.getAllVuelos);
VuelosApp.get("/:vuelosID",vuelosConsulta.getVuelosById);
VuelosApp.post("/",vuelosConsulta.createVuelos);
VuelosApp.delete("/:_id",vuelosConsulta.deleteVuelos)

export default VuelosApp;