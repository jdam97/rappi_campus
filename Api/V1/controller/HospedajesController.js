import * as HospedajesQuery from "../services/HospedajesServicio.js";

export const  getAllHospedajes = async (req, res) => {
    try {
        let data = await UsuarioQuery.getAllHospedajes();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

export const  getHospedajesById = async (req, res) => {
    try {
        let data = await UsuarioQuery.getHospedajesById(req.params.HospedajesID);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

export const  createHospedajes = async (req, res) => {
    try {
        let data = await UsuarioQuery.createHospedajes(req.body);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};