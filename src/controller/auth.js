const { Admin } = require('../models')
const { logger } = require('loglevel');
const { generateToken } = require('../utils/jwtHelper');

const login = async (request, h) => {
  const { username, password } = request.payload;

  try {
    const admin = await Admin.findOne({
      where: { username },
    });

    const passwordValid = await admin?.verifyPassword(password);

    if (!passwordValid) {
      return h
        .response({
          status: 'failed',
          message: 'Credential not match',
        })
        .code(401);
    }

    const token = generateToken(admin);

    return h.response({
      status: 'success',
      message: 'Login success',
      data: {
        token,
      },
    });
  } catch (error) {
    console.log(error);
    return h
      .response({
        status: 'failed',
        message: error.message,
      })
      .code(500);
  }
}

module.exports = {
  login
}