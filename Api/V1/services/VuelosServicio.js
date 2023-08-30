import { connectDB } from "../database/atlas.js";
import {ObjectId} from "mongodb";

export const getAllVuelos = async()=>{
    let db = await connectDB();
    let collection = db.collection('vuelos');
    let data = await collection.find({}).toArray();
    return data;
}

export const getVuelosById = async(vuelosID)=>{
let db = await connectDB();
let collection = await db.collection('vuelos');
let data = await collection.find({id:Number(vuelosID)}).toArray();
console.log(data);
return data
}