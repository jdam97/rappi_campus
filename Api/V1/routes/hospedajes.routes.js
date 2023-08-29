import { Router } from "express";
import * as HospedajeConsulta from "../controller/HospedajesController.js";

const HospedajeApp = Router();

HospedajeApp.get("/",HospedajeConsulta.getAllHospedajes);
HospedajeApp.get("/:HospedajesID",HospedajeConsulta.getHospedajesById);
HospedajeApp.post("/",HospedajeConsulta.createHospedajes);
