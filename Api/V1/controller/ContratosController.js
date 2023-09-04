import * as ContratoQuery from "../services/ContratosServicios.js";

//Get All
export const  getAllContratos = async (req, res) => {
    try {
        let data = await ContratoQuery.getAllContratos();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

//Get by id
export const  getContratosById = async (req, res) => {
    try {
        let data = await ContratoQuery.getContratosById(req.params.ContratosID);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

//Post
export const  createContratos = async (req, res) => {
    try {
        let data = await ContratoQuery.createContratos(req.body);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

//Delete
export const deleteContratos = async(req,res) =>{
    try {
        await ContratoQuery.deleteContratos(req.params._id);
        res.status(200).send({
            status:200,
            message:"Se ha eliminado contrato"
        })
    } catch (error) {
        res.status(200).send({
            message:"No se pudo eliminar exitosamente",
            error:error.message
        })
    }
}

//Put
export const updateContratos = async(req,res)=>{
    try {
        await ContratoQuery.actualizarContratos(req.params._id,req)
        res.status(200).send({
            status:200,
            message:"Contrato actualizado con exito"
        })
    } catch (error) {
        res.status(200).send({
            message:"No se pudo actualizar el contrato",
            error:error.message
        })
    }
}