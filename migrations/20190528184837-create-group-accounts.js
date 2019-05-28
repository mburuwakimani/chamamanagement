'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GroupAccounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalWithdrawals: {
        type: Sequelize.INTEGER
      },
      totalContributions: {
        type: Sequelize.INTEGER
      },
      totalAssets: {
        type: Sequelize.INTEGER
      },
      totalLiabilities: {
        type: Sequelize.INTEGER
      },
      totalLoans: {
        type: Sequelize.INTEGER
      },
      totalFines: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GroupAccounts');
  }
};