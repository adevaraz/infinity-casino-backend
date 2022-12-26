/**
 * models for player
 * {
 *    id: int,
 *    name: string,
 *    balance: int
 * }
 */

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