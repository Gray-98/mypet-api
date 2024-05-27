'use strict'

const express = require('express');
const router = express.Router();

const { createUserHandler, verifyUserHandler } = require('../handlers/user')

router.post('/registration', async (req, res) => {
	const { name, password } = req.body;
	await createUserHandler({ name, password }, res);
});

router.post('/login', async (req, res) => {
	const { name, password } = req.body;
	await verifyUserHandler({ name, password }, res)
});

module.exports = router;