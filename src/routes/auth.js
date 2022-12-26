const Joi = require('joi');
const { login } = require('../controller/auth');
const { LOGIN_VALIDATOR } = require('../validators/auth');

const routes = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: login,
    options: {
      validate: LOGIN_VALIDATOR,
      auth: false,
    },
  },
];

module.exports = routes;
