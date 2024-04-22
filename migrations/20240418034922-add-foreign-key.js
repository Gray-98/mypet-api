'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('food', 'type_id', {
      type: Sequelize.DataTypes.UUID,
      allowNull: false
    });

    await queryInterface.addConstraint('food', {
      fields: ['type_id'],
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
    await queryInterface.removeColumn('food', 'type_id');

    await queryInterface.addColumn('food', 'type', {
      type: Sequelize.STRING
    });
  }
};
