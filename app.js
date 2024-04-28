'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const PORT = 8300

app.use(cors())
app.use(bodyParser.json());
require('./routes')(app);

app.listen(PORT, err => {
	if (err) {
		console.log(err);
	}

	console.log(`Server is running on port ${PORT}......`);
});
