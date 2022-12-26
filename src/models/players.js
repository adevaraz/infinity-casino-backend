const { Model } = require("sequelize");
const { database } = require('../config')
const { PLAYER_TABLE_NAME, PLAYER_MODEL_NAME } = require('../fixture/model');

module.exports = (sequelize, DataTypes) => {
  class Player extends Model { }

  Player.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    balance: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    underscored: true,
    tableName: PLAYER_TABLE_NAME,
    schema: database.schema,
    modelName: PLAYER_MODEL_NAME,
    timestamps: false
  })

  return Player
};