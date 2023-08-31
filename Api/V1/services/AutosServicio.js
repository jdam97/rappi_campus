import { connectDB } from "../database/atlas.js";
import { ObjectId } from "mongodb";

//Get All
export const getAllAutos = async()=>{
    let db = await connectDB();
    let collection = await db.collection('autos');
    let data = collection.find({}).toArray();
    return data;
}

export const getAutosById = async(autosId)=>{
    let db = await connectDB();
    let collection = await db.collection('autos');
    let data = collection.find({id:Number(autosId)}).toArray();
    return data
}