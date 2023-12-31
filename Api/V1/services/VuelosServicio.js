import { connectDB } from "../../../database/atlas.js";
import {ObjectId} from "mongodb";

//Get All
export const getAllVuelos = async()=>{
    let db = await connectDB();
    let collection = await db.collection('vuelos');
    let data =  collection.find({}).toArray();
    return data;
}

//Get by id
export const getVuelosById = async(vuelosID)=>{
    console.log(vuelosID);
let db = await connectDB();
let collection = await db.collection('vuelos');
let data =  collection.find({id:Number(vuelosID)}).toArray();
return data
}

//Post
export const createVuelos = async(Vuelos)=>{

let db = await connectDB();
let collection = await db.collection('vuelos');
let fechaIda = new Date(Vuelos.ida)
let fechaVuelta = new Date(Vuelos.vuelta)
let daticos = {...Vuelos,ida:fechaIda,vuelta:fechaVuelta}
let data = collection.insertOne(daticos);
return data
}

//Delete
export const deleteVuelos = async (id)=>{
    let db = await connectDB();
    let collection = db.collection('vuelos');
    let data = await collection.deleteOne({_id: new ObjectId(id)})
    return data
}