import { connectDB } from "../../../database/atlas.js";
import {ObjectId} from "mongodb";

//Get All
export const getAllHospedajes = async ()=>{
    let db = await connectDB();
    let collection = db.collection('hospedajes');
    let data = await collection.find().toArray();
    return data;
};

//Get by id
export const getHospedajesById = async (HospedajesID)=>{
    console.log(HospedajesID);
    let db = await connectDB();
    let collection = db.collection('hospedajes');
    let data = await collection.find({id:Number(HospedajesID)}).toArray();
    return data;
};

//Post
export const createHospedajes = async (Hospedajes)=>{
    let db = await connectDB();
    let collection = db.collection('hospedajes');
    let fechaLlegada = new Date(Hospedajes.llegada);
    let fechaSalida = new Date(Hospedajes.salida);
    const datos= {...Hospedajes, llegada:fechaLlegada,salida:fechaSalida}; 
    let data = await collection.insertOne(datos);
    return data;
};

//Delete
export const deleteHospedajes = async(HospedajesID)=>{
    console.log(HospedajesID);
    let db = await connectDB();
    let collection = db.collection('hospedajes');
    let data = await collection.deleteOne({_id: new ObjectId(HospedajesID)});
    return data
}