'use strict';

const { createNewFoodMethod, getAllFoodMethod, updateFoodHandlerMethod, deleteFoodMethod } = require('../methods/food');

const getAllFoodHandler = async ({ typeId, page, size }, res) => {
  try {
    return res.json(await getAllFoodMethod({ typeId, page, size }));
  } catch (e) {
    return res.status(500).json({ msg: e.message })
  }
}

const createNewFoodHandler = async ({ name, type, count, birthDate, endDate, remark }, res) => {
  try {
    await createNewFoodMethod({ name, type, count, birthDate, endDate, remark })
    return res.json({ message: 'success' })
  } catch (e) {
    return res.status(500).json({ msg: e.message })
  }
}

const updateFoodHandler = async ({ foodId, type, name, count, birthDate, endDate, remark }, res) => {
  try {
    await updateFoodHandlerMethod({ foodId, type, name, count, birthDate, endDate, remark })
    return res.json({ message: 'success' })
  } catch (e) {
    return res.status(500).json({ msg: e.message })
  }
}

const deleteFoodHandler = async ({ foodId }, res) => {
  try {
    await deleteFoodMethod({ foodId })
    return res.json({ message: 'success' })
  } catch (e) {
    return res.status(500).json({ msg: e.message })
  }
}

module.exports = {
  createNewFoodHandler,
  getAllFoodHandler,
  updateFoodHandler,
  deleteFoodHandler
};
