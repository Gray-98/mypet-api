'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('food_type', {
      fields: ['name'],
      type: 'unique',
      name: 'unique_name_constraint'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('FoodType', 'unique_name_constraint');
  }
};

