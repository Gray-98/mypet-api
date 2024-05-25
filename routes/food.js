'use strict';

const express = require('express');
const router = express.Router();
const { createNewFoodHandler, getAllFoodHandler, updateFoodHandler, deleteFoodHandler } = require('../handlers/food');

router.get('/', async (req, res) => {
	const { typeId, page, size } = req.query
	await getAllFoodHandler({ typeId, page, size }, res);
});

router.post('/', async (req, res) => {
	const { name, type, count, birthDate, endDate, remark } = req.body;
	await createNewFoodHandler({ name, type, count, birthDate, endDate, remark }, res);
});

router.put('/:foodId', async (req, res) => {
	const { foodId } = req.params;
	const { type, name, count, birthDate, endDate, remark } = req.body
	await updateFoodHandler({ foodId, type, name, count, birthDate, endDate, remark }, res);
});

router.delete('/:foodId', async (req, res) => {
	const { foodId } = req.params;
	await deleteFoodHandler({ foodId }, res);
});


module.exports = router;
