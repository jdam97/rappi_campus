import Joi from "joi";


export const UsuariosSchema = Joi.object({
    id: Joi.number().required(),
    cedula: Joi.string().required().alphanum(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().required().email(),
    direccion: Joi.object({
        pais: Joi.string(),
        departamento: Joi.string(),
        ciudad: Joi.string().required(),
        direccion: Joi.string().required(),
    }),
});