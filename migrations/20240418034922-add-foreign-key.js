'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('food', 'typeId', {
      type: Sequelize.INTEGER,
      allowNull: false
    });

    await queryInterface.addConstraint('food', {
      fields: ['typeId'],
      type: 'foreign key',
      name: 'food_type_id',
      references: {
        table: 'food_type',
        field: 'id'
      },
      onUpdate: 'CASCADE'
    });

    await queryInterface.removeColumn('food', 'type');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('food', 'food_type_id');
    await queryInterface.removeColumn('food', 'typeId');

    await queryInterface.addColumn('food', 'type', {
      type: Sequelize.STRING
    });
  }
};
