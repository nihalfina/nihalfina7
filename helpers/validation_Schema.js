const joi = require('@hapi/joi');

const otp = joi.object({
    otp: joi.number().min(6).max(6).required(),
})

const login = joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().min(6).required()
})

const register = joi.object({
    name: joi.string().min(3).uppercase().required(),
    email: joi.string().email().lowercase().required(),
    phone: joi.string().min(10).max(10).required(),
    password: joi.string().required(),
    confirmPassword: joi.any().valid(joi.ref('password')).required()
})

module.exports ={
    login, 
    register,
    otp
}

