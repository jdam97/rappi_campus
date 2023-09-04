// import 'reflect-metadata';
// import {plainToClass, classToPlain } from 'class-transformer';
// import dotenv from 'dotenv';
// import {Router} from 'express';
// import { SignJWT, jwtVerify } from 'jose';

// dotenv.config("../");
// const appToken = Router();
// const appVerify = Router();
// appToken.use("/", async(req,res)=>{
//     try {
//         let inst =  plainToClass(eval(req.params.collecion), {}, { ignoreDecorators: true })
//         const encoder = new TextEncoder();
//         const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
//         const jwt = await jwtconstructor
//         .setProtectedHeader({alg:"HS256", typ: "JWT"})
//         .setIssuedAt()
//         .setExpirationTime("30m")
//         .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
//         req.data = jwt;
//         res.status(201).send({status: 201, message: jwt});
//     } catch (error) {
//       console.log(error);
//         res.status(404).send({status: 404, message: "Token solicitado no valido"});
//     }
// })

// appVerify.use("/", async(req,res,next)=>{
//     const {authorization} = req.headers;
//     if (!authorization) return res.status(400).send({status: 400, token: "Token no enviado"});
//     try {
//         const encoder = new TextEncoder();
//         const jwtData = await jwtVerify(
//             authorization,
//             encoder.encode(process.env.JWT_PRIVATE_KEY)
//         );
//         req.data = jwtData;
//         next();
//     } catch (error) {
//         res.status(498).send({status: 498, token: "Token caducado"});
//     }
// })

// export {
//     appToken,
//     appVerify
// };
import { connectDB } from "../database/atlas.js"
import { jwtVerify, SignJWT } from "jose";
import dotenv from "dotenv";
import { ObjectId } from "mongodb";
dotenv.config("../");

const db = await connectDB()
let collection = db.collection('usuarios');

const createToken = async(req,res,next)=>{
    if (Object.keys(req.body).length === 0) return res.status(400).send({status: 400, message: "datos no enviados"});
    const encoder = new TextEncoder();
    try {
        await collection.findOne({ email: req.body.email, cedula: req.body.cedula});
    } catch (error) {
        return res.status(404).send("Usuario no encontrado")
    }
    const result = await collection.findOne({ email: req.body.email, cedula: req.body.cedula});
    if(!result) return res.status(401).send({status: 401,message: "Usuario no encontrado"});
    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(process.env.JWT_KEY));
    req.data = {status: 200,message: jwtConstructor};
    next();
}
const validarToken = async (token)=>{
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_KEY)
        );
        return collection.findOne({_id: new ObjectId(jwtData.payload.id)});
    } catch (error) {
        return false;
    }
}

export {
    createToken,
    validarToken
}