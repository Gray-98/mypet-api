'use strict';

module.exports = (sequelize, dataTypes) => {
    const FoodType = sequelize.define('FoodType', {
        id: {
            type: dataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: dataTypes.DATE,
            field: 'updated_at'
        }
    }, {
        tableName: 'food_type'
    });

    FoodType.associate = models => {
        FoodType.hasMany(models.Food, { foreignKey: 'typeId', targetKey: 'id', as: 'food' })
    }

    return FoodType;
}