import { connectDB } from "../database/atlas.js";

export const getAllUsuarios = async ()=>{
    let db = await connectDB();
    let collection = db.collection('usuarios');
    let data = await collection.find().toArray();
    return data;
};

export const getUsuariosById = async (usuariosID)=>{
    let db = await connectDB();
    let collection = db.collection('usuarios');
    let data = await collection.find({id:usuariosID}).toArray();
    return data;
};

export const createUsuarios = async (usuarios)=>{
    let db = await connectDB();
    let collection = db.collection('usuarios');
    let data = await collection.insertOne(usuarios);
    return data;
};