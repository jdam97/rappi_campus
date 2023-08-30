import { Router } from "express";
import * as HospedajeConsulta from "../controller/HospedajesController.js";
import { vSchema } from "../helpers/validationSchema.js";
import { HospedajesSchema } from "../middleware/Hospedajes.js";

const HospedajeApp = Router();

HospedajeApp.get("/",HospedajeConsulta.getAllHospedajes);
HospedajeApp.get("/:HospedajesID",HospedajeConsulta.getHospedajesById);
HospedajeApp.post("/",vSchema(HospedajesSchema),HospedajeConsulta.createHospedajes);

export default HospedajeApp