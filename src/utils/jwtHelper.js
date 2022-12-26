const jwt = require('jsonwebtoken');
const { jwt: jwtConfig } = require('../config');

const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
    },
    jwtConfig.secretKey,
    { expiresIn: jwtConfig.expiration },
  );

  return token;
};

module.exports = {
  generateToken,
};
