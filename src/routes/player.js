const { createPlayer, getAllPlayers, getPlayerById, updatePlayerById, deletePlayerById } = require("../controller/player.js");
const { PLAYER_VALIDATOR } = require("../validators/player.js");

const routes = [
  {
    method: 'POST',
    path: '/players',
    handler: createPlayer,
    options: {
      validate: PLAYER_VALIDATOR,
    }
  },
  {
    method: 'GET',
    path: '/players',
    handler: getAllPlayers,
  },
  {
    method: 'GET',
    path: '/players/{id}',
    handler: getPlayerById,
  },
  {
    method: 'PUT',
    path: '/players/{id}',
    handler: updatePlayerById,
    options: {
      validate: PLAYER_VALIDATOR,
    }
  },
  {
    method: 'DELETE',
    path: '/players/{id}',
    handler: deletePlayerById,
  },
]

module.exports = routes;