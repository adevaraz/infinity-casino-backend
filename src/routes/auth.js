const { login } = require("../controller/auth")

const routes = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: login
  }
]

module.exports = routes