const { DataTypes } = require('sequelize');
const { PLAYER_TABLE_NAME } = require('../../fixture/model');
const { database } = require('../../config');

const schemaAttributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  balance: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

const schemaOptions = {
  tableName: PLAYER_TABLE_NAME,
  schema: database.schema
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(schemaOptions, schemaAttributes)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(schemaOptions)
  }
};
