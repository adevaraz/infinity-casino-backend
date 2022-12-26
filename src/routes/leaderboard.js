const { getLeaderBoards } = require('../controller/leaderboard');

const routes = [
  {
    method: 'GET',
    path: '/leaderboards',
    handler: getLeaderBoards,
  },
];

module.exports = routes;
