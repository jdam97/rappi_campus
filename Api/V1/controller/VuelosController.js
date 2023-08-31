import * as vuelosQuery from "../services/VuelosServicio.js";

export const getAllVuelos = async (req,res)=>{
    try {
        let data = await vuelosQuery.getAllVuelos();
        res.status(200).send({
            status:200,
            message:'Nice!',
            data
        })
        
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener todos los vuelos",
            error:error.message
        })
    }

}

export const getVuelosById = async(req,res)=>{
    try {
        let data = await vuelosQuery.getVuelosById(req.params.vuelosID);
        res.status(200).send({
            status:200,
            message:'Nice!',
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener vuelo por id",
            error:error.message
        })
        
    }
}

export const createVuelos = async(req,res)=>{
    try {
        let data = await vuelosQuery.createVuelos(req.body);
        res.status(200).send({
            status:200,
            message:'Nice!',
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener vuelo por id",
            error:error.message
        })
    }
}

export const deleteVuelos = async(req,res)=>{
    try {
        vuelosQuery.deleteVuelos(req.params._id)
        res.status(200).send({
            status:200,
            message:'Nice!',
        })
    } catch (error) {
        res.status(500).send({message:"No se pudo borrar el vuelo",
        error:error.message})
    }
}