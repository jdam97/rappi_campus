import * as UsuarioQuery from "../services/UserServicio.js";

export const  getAllUsuarios = async (req, res) => {
    try {
        let data = await UsuarioQuery.getAllUsuarios();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

export const  getUsuariosById = async (req, res) => {
    try {
        let data = await UsuarioQuery.getUsuariosById(req.params.usuariosID);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

export const  createUsuarios = async (req, res) => {
    try {
        let data = await UsuarioQuery.createUsuarios(req.body);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};