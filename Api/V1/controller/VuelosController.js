import * as vuelosQuery from "../services/VuelosServicio.js";

//Get All
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

//Get by id
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

//Post
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
            message:"No se pudo crear vuelo",
            error:error.message
        })
    }
}

//Delete
export const deleteVuelos = async(req,res)=>{
    try {
        await vuelosQuery.deleteVuelos(req.params._id)
        res.status(200).send({
            status:200,
            message:'Nice!',
        })
    } catch (error) {
        res.status(500).send({message:"No se pudo borrar el vuelo",
        error:error.message})
    }
}