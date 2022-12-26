const { Player } = require('../models');

const getLeaderBoards = async (request, h) => {
  const playersInLeaderboard = await Player.findAll({
    limit: 3,
    order: [['balance', 'DESC']],
  });

  return h.response({
    status: 'success',
    message: 'Fetching leaderboard data success',
    data: playersInLeaderboard,
  });
};

module.exports = {
  getLeaderBoards,
};
