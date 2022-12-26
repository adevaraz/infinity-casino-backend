'use strict';
const { Admin } = require('../../models');

const adminData = {
  username: 'admin',
  password: 'admin1234',
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Admin.create(adminData);
  },

  async down (queryInterface, Sequelize) {
    await Admin.destroy({ where: { username: adminData.username } });
  }
};
