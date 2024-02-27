'use strict';



const { createNewFoodMethod, getAllFoodMethod, updateFoodHandlerMethod, deleteFoodMethod } = require('../methods/food');

const getAllFoodHandler = async() => {
  return await getAllFoodMethod();
}

const createNewFoodHandler = async(req) => {
  const { name, type, count, birthDate, endDate, remark } = req.body;
  return await createNewFoodMethod({ name, type, count, birthDate, endDate, remark })
}

const updateFoodHandler = async(req) => {
  const { foodId } = req.params;
  const { type, name, count, birthDate, endDate, remark } = req.body
  return await updateFoodHandlerMethod({ foodId, type, name, count, birthDate, endDate, remark })
}

const deleteFoodHandler = async(req) => {
  const { foodId } = req.params;
  return await deleteFoodMethod({ foodId })
}

module.exports = {
  createNewFoodHandler,
  getAllFoodHandler,
  updateFoodHandler,
  deleteFoodHandler
};
