'use strict';

const express = require('express');
const router = express.Router();
const fileHandler = require('../handlers/file');

router.get('/file', async(req, res) => {
	const result = await fileHandler(req, res);
	res.json(result);
});

module.exports = router;
