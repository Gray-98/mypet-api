'use strict';

const dayJs = require('dayjs');
const { Food } = require('../models')
const foodStatus = require('../constants/food-status')

const createNewFoodMethod = async({ name, type, count, birthDate, endDate, remark }) => {
    await Food.create({ name, type, count, birthDate, endDate, remark })
}

const getAllFoodMethod = async() => {
    const food = await Food.findAll({ where: { status: foodStatus['normal'] }});
    return food.map((f) => ({
        type: f.type,
        name: f.name,
        count: f.count,
        birthDate: f.birthDate,
        endDate: f.endDate,
        remark: f.remark,
        createdAt: dayJs(f.createdAt).format('YYYY-MM-DD'),
        updatedAt: dayJs(f.updateAt).format('YYYY-MM-DD')
    }))
}

const updateFoodHandlerMethod = async({ foodId, type, name, count, birthDate, endDate, remark }) => {
    await Food.update(
        { type, name, count, birthDate, endDate, remark },
        { where: { id: foodId }
    });
}

const deleteFoodMethod = async({ foodId }) => {
    await Food.update({ status: foodStatus['deleted'] }, { where: { id: foodId } })
}

module.exports = {
    createNewFoodMethod,
    getAllFoodMethod,
    updateFoodHandlerMethod,
    deleteFoodMethod
}