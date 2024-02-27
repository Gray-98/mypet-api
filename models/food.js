'use strict';

const foodStatus = require('../constants/food-status')

module.exports = (sequelize, dataTypes) => {
    const Food = sequelize.define('Food', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: dataTypes.STRING
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

    return Food;
}