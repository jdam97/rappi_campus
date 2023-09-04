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
    let collection = db.collection('autos');
    let fecha_recogida = new Date(Auto.fecha_recogida) 
    let fecha_devolucion = new Date(Auto.fecha_devolucion) 
    let datos = {...Auto,fecha_recogida:fecha_recogida,fecha_devolucion:fecha_devolucion}
    console.log(datos);
    let data = await collection.insertOne(datos)
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
    let fecha_recogida = new Date (req.body.fecha_recogida)
    let fecha_devolucion = new Date (req.body.fecha_devolucion)
    let datos = {...req.body,fecha_recogida:fecha_recogida,fecha_devolucion:fecha_devolucion}
    let data = collection.updateOne({_id:new ObjectId(autosId)},{$set:datos})
    return data
}