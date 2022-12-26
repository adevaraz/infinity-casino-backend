const jwt = require('jsonwebtoken');
const { jwt: jwtConfig } = require('../config');

const generateToken = (user) => {
  const token = jwt.sign(
    {
      user: {
        id: user.id,
      },
    },
    jwtConfig.secretKey,
    { expiresIn: jwtConfig.expiration },
  );

  return token;
};

const jwtStrategyRegistrationOptions = {
  keys: jwtConfig.secretKey,
  verify: {
    aud: false,
    iss: false,
    sub: false,
    nbf: false,
    exp: true,
  },
  validate: (artifact, request, h) => {
    return {
      isValid: true,
      credentials: { user: artifact.decoded.payload.user },
    };
  },
};

module.exports = {
  generateToken,
  jwtStrategyRegistrationOptions,
};
