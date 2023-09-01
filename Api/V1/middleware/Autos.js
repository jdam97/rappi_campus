import Joi from "joi";

export const AutosSchema = Joi.object({
    id: Joi.number().required(),
    punto_recogida: Joi.string().required(),
    punto_devolucion: Joi.string().required(),
    fecha_recogida: Joi.date().required(),
    fecha_devolucion: Joi.date().required(),
});