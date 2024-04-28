'use strict';

const express = require('express');
const router = express.Router();
const { createNewFoodHandler, getAllFoodHandler, updateFoodHandler, deleteFoodHandler } = require('../handlers/food');

router.get('/', async (req, res) => {
	try {
		const result = await getAllFoodHandler(req);
		res.json(result);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ msg: e.message })
	}
});

router.post('/', async (req, res) => {
	try {
		await createNewFoodHandler(req);
		res.json({ message: 'success' })
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ msg: e.message })
	}
});

router.put('/:foodId', async (req, res) => {
	try {
		await updateFoodHandler(req);
		res.json({ message: 'success' })
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ msg: e.message })
	}
});

router.delete('/:foodId', async (req, res) => {
	try {
		await deleteFoodHandler(req);
		res.json({ message: 'success' })
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ msg: e.message })
	}
})


module.exports = router;
