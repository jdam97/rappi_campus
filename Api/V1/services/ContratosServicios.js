import { connectDB } from "../../../database/atlas.js";

export const getAllContratos = async ()=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let data = await collection.find().toArray();
    return data;
};

export const getContratosById = async (ContratosID)=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let data = await collection.find({id:ContratosID}).toArray();
    return data;
};

export const createContratos = async (contrato)=>{
    let db = await connectDB();
    let collection = db.collection('contratos');
    let data = await collection.insertOne(contrato);
    return data;
};