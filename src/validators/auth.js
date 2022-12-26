const Joi = require('joi');

const LOGIN_VALIDATOR = {
  payload: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  LOGIN_VALIDATOR,
};
