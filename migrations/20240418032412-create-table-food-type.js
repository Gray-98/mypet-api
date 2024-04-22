'use strict';

const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('food_type', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      name: {
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
      tableName: 'FoodType'
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('food_type')
  }
};