'use strict';

const { DataTypes } = require('sequelize')
const foodStatus = require('../constants/food-status')

module.exports = {
  async up (queryInterface) {
    return queryInterface.createTable('food', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      birthDate: {
        type: DataTypes.DATE,
        field: 'birth_date'
      },
      endDate: {
        type: DataTypes.DATE,
        field: 'end_date'
      },
      remark: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: foodStatus['normal']
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
      tableName: 'Food'
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('food')
  }
};