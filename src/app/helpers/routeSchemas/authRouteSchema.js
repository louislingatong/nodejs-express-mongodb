const Joi = require('@hapi/joi');

module.exports = {
  registerSchema: Joi.object().keys({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),

  loginSchema: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),

  forgotPasswordSchema: Joi.object().keys({
    email: Joi.string().email().required(),
  }),

  resetPasswordSchema: Joi.object().keys({
    token: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
  }),

  issueEmailVerificationLinkSchema: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
}