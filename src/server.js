const Hapi = require('@hapi/hapi');
const { sequelize } = require('./models/index.js');
const routes = require('./routes/player.js');
const authRoutes = require('./routes/auth.js');

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

  server.route(authRoutes)
  server.route(routes);

  await sequelize.authenticate()
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();