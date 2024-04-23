'use strict';

const foodStatus = require('../constants/food-status')

module.exports = (sequelize, dataTypes) => {
    const Food = sequelize.define('Food', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        typeId: {
            type: dataTypes.UUID,
            field: 'type_id'
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        count: {
            type: dataTypes.INTEGER,
            defaultValue: 0,
        },
        birthDate: {
            type: dataTypes.DATE,
            field: 'birth_date'
        },
        endDate: {
            type: dataTypes.DATE,
            field: 'end_date'
        },
        remark: {
            type: dataTypes.STRING
        },
        status: {
            type: dataTypes.INTEGER,
            defaultValue: foodStatus['normal']
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
        tableName: 'food'
    });

    Food.associate = models => {
        Food.belongsTo(models.FoodType, { foreignKey: 'typeId', sourceKey: 'id', as: 'foodType' })
    }

    return Food;
}