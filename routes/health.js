'use strict';

const express = require('express');
const router = express.Router();
router.get('/health', (req, res) => {
	const {name} = req.query;
	return res.send(`Hello ~ ${name || 'Welcome ~~~'}`);
});

module.exports = router;
