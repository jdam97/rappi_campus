import "dotenv/config";
import { SignJWT, jwtVerify } from "jose";

export const TokenGenerator = async (datos) => {
    let datosToken = {
        cedula: datos[0].cedula,
        nombre: datos[0].nombre,
        permisos: datos[0].permisos
    };
    const codificar = new TextEncoder();
    const Token = await new SignJWT(datosToken).setProtectedHeader({
        alg: "HS256",
        typ: "JWT"
    }).setIssuedAt().setExpirationTime("2h").sign(codificar.encode(process.env.JWT_KEY));

    return Token;

};

export const TokenValidator = async (req,res,next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({
            message: "No se ha enviado el token o se ha vencido"
        });
    }
    try {
        const codificar = new TextEncoder();
        req.auth = await jwtVerify(authorization,codificar.encode(process.env.JWT_KEY));
        next();
    } catch (error) {
        res.status(401).send({status:401,Info:{message:"Error en la validacion del token",error:error}});
    }
};