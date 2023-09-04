import { Router } from "express";
import * as UsuarioConsulta from "../controller/UserController.js";
import { vSchema } from "../../../helpers/validationSchema.js";
import { UsuariosSchema } from "../../../middleware/User.js";
import { appToken, appVerify } from "../../../config/Jwt.js";

const UsuarioApp = Router();

UsuarioApp.post("/login",vSchema(UsuariosSchema),appToken)
UsuarioApp.get("/",appVerify,UsuarioConsulta.getAllUsuarios);
UsuarioApp.get("/:usuariosID",appVerify,UsuarioConsulta.getUsuariosById);
UsuarioApp.post("/",vSchema(UsuariosSchema),appVerify,UsuarioConsulta.createUsuarios);
UsuarioApp.delete("/:_id",appVerify,UsuarioConsulta.deleteUser)
export default UsuarioApp;