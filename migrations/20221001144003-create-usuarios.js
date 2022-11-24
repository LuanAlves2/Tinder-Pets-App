'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      namepet: {
        type: Sequelize.CHAR
      },
      phone: {
        type: Sequelize.STRING
      },
      racapet: {
        type: Sequelize.STRING
      },
      generpet: {
        type: Sequelize.CHAR
      },
      agepet: {
        type: Sequelize.INTEGER
      },
      interessepet: {
        type: Sequelize.CHAR
      },
      descpet: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};