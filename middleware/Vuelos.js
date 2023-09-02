import Joi from "joi";

export const VuelosSchema = Joi.object({
    id: Joi.number().required(),
    origen: Joi.string().required(),
    destino: Joi.string().required(),
    ida: Joi.date().required(),
    vuelta: Joi.date().required(),
    npasajeros: Joi.number().required(),
    clase: Joi.string().required().valid("ejecutiva","primeraClase","economy"),
    tipoHuesped: Joi.object({
        adultos: Joi.number().required(),
        niños: Joi.number().required(),
    }).required(),
});