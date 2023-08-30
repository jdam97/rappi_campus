import Joi from "joi";

export const HospedajesSchema = Joi.object({
    id: Joi.number().required(),
    destino: Joi.string().required(),
    tipo: Joi.string().required(),
    llegada: Joi.date().required(),
    salida: Joi.date().required(),
    habitaciones: Joi.string().required(),
    nhuespedes: Joi.number().required(),
    tipo_huesped: Joi.object({
        adultos: Joi.number().required(),
        niños: Joi.number().required(),
    }).required(),
})