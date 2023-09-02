import * as HospedajesQuery from "../services/HospedajesServicio.js";

//Get All
export const  getAllHospedajes = async (req, res) => {
    try {
        let data = await HospedajesQuery.getAllHospedajes();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

//Get by id
export const  getHospedajesById = async (req, res) => {
    try {
        let data = await HospedajesQuery.getHospedajesById(req.params.HospedajesID);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

//Post
export const  createHospedajes = async (req, res) => {
    try {
        let data = await HospedajesQuery.createHospedajes(req.body);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

//Delete
export const deleteHospedajes = async(req,res)  =>{
    try {
        await HospedajesQuery.deleteHospedajes(req.params._id)
        res.status(200).send({
            status:200,
            message:" Se ha eliminado la reserva con exito"
        })
    } catch (error) {
        res.status(500).send({
            message:"No se pudo eliminar la reserva",
            error:error.message
        })
    }
}