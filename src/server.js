const Hapi = require('@hapi/hapi');
const Jwt = require('@hapi/jwt');
const { sequelize } = require('./models/index.js');
const { jwt: jwtConfig } = require('./config');
const routes = require('./routes/player.js');
const authRoutes = require('./routes/auth.js');
const leaderboardRoutes = require('./routes/leaderboard');
const { jwtStrategyRegistrationOptions } = require('./utils/jwtHelper.js');

const init = async () => {
  const server = Hapi.server({
    port: process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000,
    host: process.env.NODE_ENV !== 'prod' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register(Jwt);
  server.auth.strategy('jwt', 'jwt', jwtStrategyRegistrationOptions);

  server.auth.default('jwt');

  server.route(authRoutes);
  server.route(routes);
  server.route(leaderboardRoutes);

  await sequelize.authenticate();
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();