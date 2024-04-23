'use strict';

const dayJs = require('dayjs')
const { Food, FoodType } = require('../models')
const foodStatus = require('../constants/food-status')

const createNewFoodMethod = async ({ name, type, count, birthDate, endDate, remark }) => {
    const [foodType, created] = await FoodType.findOrCreate({
        where: { name: type },
        defaults: { name: type }
    })
    await Food.create({ name, typeId: foodType.id, count, birthDate, endDate, remark })
}

const getAllFoodMethod = async () => {
    const food = await Food.findAll({
        where: {
            status: foodStatus['normal']
        },
        include: [{
            model: FoodType,
            attributes: ['name'],
            as: 'foodType'
        }]
    });
    const foodType = await FoodType.findAll({
        attributes: ['id', 'name']
    });

    return {
        food: food.map((f) => ({
            type: f.foodType.name,
            id: f.id,
            name: f.name,
            count: f.count,
            birthDate: f.birthDate,
            endDate: f.endDate,
            remark: f.remark,
            createdAt: dayJs(f.createdAt).format('YYYY-MM-DD'),
            updatedAt: dayJs(f.updatedAt).format('YYYY-MM-DD')
        })),
        foodType
    }
}

const updateFoodHandlerMethod = async ({ foodId, type, name, count, birthDate, endDate, remark }) => {
    await Food.update(
        { type, name, count, birthDate, endDate, remark },
        {
            where: { id: foodId }
        });
}

const deleteFoodMethod = async ({ foodId }) => {
    await Food.update({ status: foodStatus['deleted'] }, { where: { id: foodId } })
}

module.exports = {
    createNewFoodMethod,
    getAllFoodMethod,
    updateFoodHandlerMethod,
    deleteFoodMethod
}