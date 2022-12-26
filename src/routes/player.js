const { createPlayer, getAllAccounts, getAccountById, updateAccountBalanceById, deleteAccountById } = require("../controller/player.js");
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
    handler: getAllAccounts,
  },
  {
    method: 'GET',
    path: '/accounts/{id}',
    handler: getAccountById,
  },
  {
    method: 'PUT',
    path: '/accounts/{id}',
    handler: updateAccountBalanceById,
  },
  {
    method: 'DELETE',
    path: '/accounts/{id}',
    handler: deleteAccountById,
  },
]

module.exports = routes;