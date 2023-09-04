import { ObjectId } from "mongodb";
import { connectDB } from "../../../database/atlas.js";

//Get All
export const getAllContratos = async ()=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let data = await collection.find().toArray();
    return data;
};

//Get by id
export const getContratosById = async (ContratosID)=>{
    console.log(ContratosID);
    let db = await connectDB();
    let collection = db.collection('contratos');
    let data = await collection.find({id:Number(ContratosID)}).toArray();

    return data;
};

//Post
export const createContratos = async (contrato)=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let fechaContrato = new Date (contrato.fechaContrato)
    let datos = {...contrato,fechaContrato:fechaContrato}
    let data = await collection.insertOne(datos);
    return data;
};

//Delete
export const deleteContratos = async(contratos)=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let data = collection.deleteOne({_id: new ObjectId(contratos)})
    return data
}

//Put
export const actualizarContratos= async(contratos_id,req)=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let fechaContrato = new Date(req.body.fechaContrato)
    let datos = {...req.body,fechaContrato:fechaContrato};
    let data = await collection.updateOne({_id:new ObjectId(contratos_id) },{$set:datos})
    return data
}
