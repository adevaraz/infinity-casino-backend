const Joi = require('joi');

const PLAYER_VALIDATOR = {
  payload: Joi.object({
    name: Joi.string()
      .min(5)
      .required(),
    balance: Joi.number()
      .required(),
  }),
}

module.exports = {
  PLAYER_VALIDATOR,
};