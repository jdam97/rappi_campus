import { Router } from "express";
import * as UsuarioConsulta from "../controller/UserController.js";
import { limitRequest } from "../config/limit.js";

const UsuarioApp = Router();

UsuarioApp.get("/",UsuarioConsulta.getAllUsuarios);
UsuarioApp.get("/:usuariosID",UsuarioConsulta.getUsuariosById);
UsuarioApp.post("/",UsuarioConsulta.createUsuarios);

export default UsuarioApp;