const Joi = require('joi');
const { login } = require('../controller/auth');

const routes = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: login,
    options: {
      validate: {
        payload: Joi.object().keys({
          username: Joi.string().required(),
          password: Joi.string().required(),
        }),
      },
    },
  },
];

module.exports = routes;
