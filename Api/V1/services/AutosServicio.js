import { connectDB } from "../../../database/atlas.js";
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
export const deleteAutos = async(idAuto)=>{
    let db = await connectDB();
    let collection = await db.collection('autos');
    let data = collection.deleteOne({_id: new ObjectId(idAuto)})
    return data
}

//Put
export const putAutos = async(autosId,req)=>{
    let db= await connectDB();
    let collection = await db.collection('autos');
    let data = collection.updateOne({_id: new ObjectId(autosId)}, {$set: req.body})
    return data
}