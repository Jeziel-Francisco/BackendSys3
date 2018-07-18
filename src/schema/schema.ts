import * as Joi from 'joi';

export const UserSchema = Joi.object().keys({
    id: Joi.number().positive().integer().error(new Error('"id" precisa ser informado !')),
    password: Joi.string().error(new Error('"password" precisa ser informado !')),
    name: Joi.string().alphanum().error(new Error('"name" deve ser alfanumerico e é obrigatorio !')),
    username: Joi.string().alphanum().error(new Error('"username" deve ser alfanumerico e é obrigatorio !')),
    email: Joi.string().email().error(new Error('"email" precisa ser infromado !')),
    percentageDicount: Joi.number().positive().error(new Error('"percentageDiscount" deve ser do tipo numerico !'))
});