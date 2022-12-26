const { createAccount, getAllAccounts, getAccountById, updateAccountBalanceById, deleteAccountById } = require("../controller/player.js");

const routes = [
  {
    method: 'POST',
    path: '/accounts',
    handler: createAccount,
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