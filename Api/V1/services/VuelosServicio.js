import { connectDB } from "../database/atlas.js";
import {ObjectId} from "mongodb";

//Get All
export const getAllVuelos = async()=>{
    let db = await connectDB();
    let collection = db.collection('vuelos');
    let data = await collection.find({}).toArray();
    return data;
}

//Get by id
export const getVuelosById = async(vuelosID)=>{
let db = await connectDB();
let collection = await db.collection('vuelos');
let data = await collection.find({id:Number(vuelosID)}).toArray();
return data
}

//Post
export const createVuelos = async(Vuelos)=>{
let db = await connectDB();
let collection = await db.collection('vuelos');
let data = await collection.insertOne(Vuelos);
return data
}