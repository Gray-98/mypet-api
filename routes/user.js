'use strict'

const express = require('express');
const router = express.Router();

const { createUserHandler } = require('../handlers/user')

router.post('/registration', async (req, res) => {
	try {
		await createUserHandler(req);
		return res.json({ message: 'success' })
	} catch (e) {
		if(e.message === 'UserAlreadyExists') {
			return res.status(403).json({ msg: e.message })
		}
		return res.status(500).json({ msg: e.message })
	}
});

module.exports = router;