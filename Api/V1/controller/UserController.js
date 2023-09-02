import * as UsuarioQuery from "../services/UserServicio.js";

//Get All
export const  getAllUsuarios = async (req, res) => {
    try {
        let data = await UsuarioQuery.getAllUsuarios();
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

//Get by id
export const  getUsuariosById = async (req, res) => {
    try {
        let data = await UsuarioQuery.getUsuariosById(req.params.usuariosID);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

//Post
export const  createUsuarios = async (req, res) => {
    try {
        let data = await UsuarioQuery.createUsuarios(req.body);
        res.status(200).send({status: 200,message: "Ok", data})
    } catch (error) {
        res.status(500).send({status: 500,message: error.message})        
    }
};

//Delete
export const deleteUser = async(req,res) =>{
    try {
        await UsuarioQuery.deleteUser(req.params._id);
        res.status(200).send({
            status:200,
            message:'Nice!'
        })
        
    } catch (error) {
        res.status(500).send({
            message:"No se pudo borrar el usuario",
            error:error.message
        })
    }
}