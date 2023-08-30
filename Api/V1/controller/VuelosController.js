import * as vuelosQuery from "../services/VuelosServicio.js";

export const getAllVuelos = async (req,res)=>{
    try {
        let data = await vuelosQuery.getAllVuelos();
        res.status(200).json({
            status:200,
            message:'Nice!',
            data
        })
        
    } catch (error) {
        res.status(500).json({
            message:"No se pudo obtener todos los vuelos",
            error:error.message
        })
    }

}