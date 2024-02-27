'use strict';

const health = require('./health');
const file = require('./file');
const food = require('./food');

module.exports = (app) => {
    app.use('/', health);
    app.use('/', file);

    app.use('/food', food);
};
