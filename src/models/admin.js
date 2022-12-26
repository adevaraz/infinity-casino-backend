const { Model } = require('sequelize');
const { database } = require('../config')
const { ADMIN_MODEL_NAME, ADMIN_TABLE_NAME } = require('../fixture/model');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model { }

  Admin.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    underscored: true,
    tableName: ADMIN_TABLE_NAME,
    schema: database.schema,
    modelName: ADMIN_MODEL_NAME,
    timestamps: false
  })

  return Admin
}