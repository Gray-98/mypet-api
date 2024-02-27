'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
require('./routes')(app);

app.listen(8300, err => {
	if (err) {
		console.log(err);
	}

	console.log('Server is running on port 8080......');
});
