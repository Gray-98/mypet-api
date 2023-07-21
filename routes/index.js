'use strict';

const health = require('./health');
const file = require('./file');

module.exports = (app) => {
    app.use('/', health);
    app.use('/', file);
};
