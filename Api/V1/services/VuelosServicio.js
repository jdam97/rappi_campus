import { connectDB } from "../database/atlas.js";

export const getAllVuelos = async()=>{
    let db = await connectDB();
    let collection = db.collection('vuelos');
    let data = await collection.find({}).toArray();
    return data;
}