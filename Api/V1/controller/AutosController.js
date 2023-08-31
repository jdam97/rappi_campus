import * as autosQuerys from "../services/AutosServicio.js"

//Get All
export const getAllAutos = async(req,res)=>{
    try {
        const data = await autosQuerys.getAllAutos();
        res.status(200).send({
            message:"Nice!",
            data
        })
        
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener todos los autos reservados",
            error:error.message
        })

    }
}

//Get by Id
export const getAutosById = async(req,res)=>{
    try {
        let data = await autosQuerys.getAutosById(req.params.autosId)
        res.status(200).send({
            message:"Nice!",
            data
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo obtener el auto por id",
            error:error.message
        })

    }
}

//Post
export const createAutos = async(req,res)=>{
    try {
        let data = autosQuerys.createAutos(req.body);
        res.status(200).send({
        message:"Reserva auto creada exitosamente!",
        data
    })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo crear la reserva auto",
            error:error.message
        })
    }
}

//Delete
export const deleteAutos = async(req,res)=>{
    try {
        let data = await autosQuerys.deleteVuelos(req.params._id);
        res.status(200).send({
            status:200,
            message: "Reserva de auto eliminada con exito!"
    })
        
    } catch (error) {
        res.status(500).send({
            message:"No se pudo eliminar la reserva de auto",
            error:error.message
        })
    }
}

