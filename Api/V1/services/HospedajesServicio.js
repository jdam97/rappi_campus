import { connectDB } from "../database/atlas.js";

export const getAllHospedajes = async ()=>{
    let db = await connectDB();
    let collection = db.collection('hospedajes');
    let data = await collection.find().toArray();
    return data;
};

export const getHospedajesById = async (HospedajesID)=>{
    let db = await connectDB();
    let collection = db.collection('hospedajes');
    let data = await collection.find({id:HospedajesID}).toArray();
    return data;
};

export const createHospedajes = async (Hospedajes)=>{
    let db = await connectDB();
    let collection = db.collection('hospedajes');
    let data = await collection.insertOne(Hospedajes);
    return data;
};