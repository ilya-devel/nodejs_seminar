const Joi = require("joi");

const userScheme = Joi.object({
    name: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    age: Joi.number().min(0).required(),
    city: Joi.string().min(2).required()
})

const idScheme = Joi.object({
    id: Joi.number().required()
})

module.exports = { userScheme, idScheme }