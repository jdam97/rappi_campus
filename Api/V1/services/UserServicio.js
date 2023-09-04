import { ObjectId } from "mongodb";
import { connectDB } from "../../../database/atlas.js"

//Get All
export const getAllUsuarios = async ()=>{
    let db = await connectDB();
    let collection = db.collection('usuarios');
    let data = await collection.find().toArray();
    return data;
};

//Get by Id
export const getUsuariosById = async (usuariosID)=>{
    let db = await connectDB();
    let collection = db.collection('usuarios');
    let data = await collection.find({id:Number(usuariosID)}).toArray();
    return data;
};

//Post
export const createUsuarios = async (usuarios)=>{
    let db = await connectDB();
    let collection = db.collection('usuarios');
    let data = await collection.insertOne(usuarios);
    return data;
};

//Delete
export const deleteUser = async(usuariosID)=>{
    let db = await connectDB();
    let collection = db.collection('usuarios');
    let data = await collection.deleteOne({_id: new ObjectId(usuariosID)})
    return data
}