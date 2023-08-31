import { connectDB } from "../database/atlas.js";
import { ObjectId } from "mongodb";

//Get All
export const getAllAutos = async()=>{
    let db = await connectDB();
    let collection = await db.collection('autos');
    let data = collection.find({}).toArray();
    return data;
}
//Get by id
export const getAutosById = async(autosId)=>{
    let db = await connectDB();
    let collection = await db.collection('autos');
    let data = collection.find({id:Number(autosId)}).toArray();
    return data
}

//Post
export const createAutos = async(Auto)=>{
    let db = await connectDB();
    let collection = await db.collection('autos');
    let data = collection.insertOne(Auto).toArray();
    return data
}

//Delete
export const deleteVuelos = async(idAuto)=>{
    let db = await connectDB();
    let collection = await db.collection('autos');
    let data = collection.deleteOne({_id: new ObjectId(idAuto)})
    return data
}