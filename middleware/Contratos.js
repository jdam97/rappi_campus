import Joi from "joi";

export const ContratosSchema = Joi.object({
    id: Joi.number().required(),
    usuarioId: Joi.number().required(),
    tipoReserva: Joi.string().required().valid("vuelo","auto","hospedaje"),
    reservaId: Joi.number().required(),
    fechaContrato: Joi.date().required(),
    estado: Joi.string().required(),
});