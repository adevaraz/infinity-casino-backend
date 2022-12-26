const modelName = 'Player';
const tableName = 'players';

const { Model } = require("sequelize");

const players = []; // array of json account

module.exports = (sequelize, DataTypes) => {
  class Player extends Model { }

  Player.init({
    // attributes
  }, {
    sequelize,
    modelName: 'Player'
  })

  return Player
};