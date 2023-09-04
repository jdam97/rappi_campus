import { Router } from "express";
import * as HospedajeConsulta from "../controller/HospedajesController.js";
import { vSchema } from "../../../helpers/validationSchema.js";
import { HospedajesSchema } from "../../../middleware/Hospedajes.js";
import passportHelper from "../../../helpers/passportLogin.js"

const HospedajeApp = Router();

HospedajeApp.use(passportHelper.authenticate('bearer', {session: false}));

HospedajeApp.get("/",HospedajeConsulta.getAllHospedajes);
HospedajeApp.get("/:HospedajesID",HospedajeConsulta.getHospedajesById);
HospedajeApp.post("/",vSchema(HospedajesSchema),HospedajeConsulta.createHospedajes);
HospedajeApp.delete("/:_id",HospedajeConsulta.deleteHospedajes)
export default HospedajeApp