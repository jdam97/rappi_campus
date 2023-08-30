import * as ContratoQuery from "../services/ContratosServicios.js";

export const  getAllContratos = async (req, res) => {
    try {
        let data = await ContratoQuery.getAllContratos();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

export const  getContratosById = async (req, res) => {
    try {
        let data = await ContratoQuery.getContratosById(req.params.ContratosID);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

export const  createContratos = async (req, res) => {
    try {
        let data = await ContratoQuery.createContratos(req.body);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};