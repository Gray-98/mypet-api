'use strict';

const { DataTypes } = require('sequelize')

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    }, {
      tableName: 'User'
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('user')
  }
};
