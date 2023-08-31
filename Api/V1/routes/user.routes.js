import { Router } from "express";
import * as UsuarioConsulta from "../controller/UserController.js";
import { limitRequest } from "../config/limit.js";
import { vSchema } from "../helpers/validationSchema.js";
import { UsuariosSchema } from "../middleware/User.js";

const UsuarioApp = Router();

UsuarioApp.get("/",UsuarioConsulta.getAllUsuarios);
UsuarioApp.get("/:usuariosID",UsuarioConsulta.getUsuariosById);
UsuarioApp.post("/",vSchema(UsuariosSchema),UsuarioConsulta.createUsuarios);
export default UsuarioApp;