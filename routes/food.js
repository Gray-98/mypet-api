'use strict';

const express = require('express');
const router = express.Router();
const { createNewFoodHandler, getAllFoodHandler, updateFoodHandler, deleteFoodHandler } = require('../handlers/food');

router.get('/', async (req, res) => {
	try {
		const result = await getAllFoodHandler(req);
		return res.json(result);
	} catch (e) {
		return res.status(500).json({ msg: e.message })
	}
});

router.post('/', async (req, res) => {
	try {
		await createNewFoodHandler(req);
		return res.json({ message: 'success' })
	} catch (e) {
		return res.status(500).json({ msg: e.message })
	}
});

router.put('/:foodId', async (req, res) => {
	try {
		await updateFoodHandler(req);
		return res.json({ message: 'success' })
	} catch (e) {
		return res.status(500).json({ msg: e.message })
	}
});

router.delete('/:foodId', async (req, res) => {
	try {
		await deleteFoodHandler(req);
		return res.json({ message: 'success' })
	} catch (e) {
		return res.status(500).json({ msg: e.message })
	}
})


module.exports = router;
