'use strict'

const express = require('express');
const router = express.Router();

const { createUserHandler } = require('../handlers/user')

router.post('/registration', async (req, res) => {
	const { name, password } = req.body;
	await createUserHandler({ name, password }, res);
});

module.exports = router;