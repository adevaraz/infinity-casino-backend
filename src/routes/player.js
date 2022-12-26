const { createPlayer, getAllPlayers, getPlayerById, updatePlayerById, deleteAccountById } = require("../controller/player.js");
const { PLAYER_VALIDATOR } = require("../validators/player.js");

const routes = [
  {
    method: 'POST',
    path: '/accounts',
    handler: createPlayer,
    options: {
      validate: PLAYER_VALIDATOR,
    }
  },
  {
    method: 'GET',
    path: '/accounts',
    handler: getAllPlayers,
  },
  {
    method: 'GET',
    path: '/accounts/{id}',
    handler: getPlayerById,
  },
  {
    method: 'PUT',
    path: '/accounts/{id}',
    handler: updatePlayerById,
    options: {
      validate: PLAYER_VALIDATOR,
    }
  },
  {
    method: 'DELETE',
    path: '/accounts/{id}',
    handler: deleteAccountById,
  },
]

module.exports = routes;