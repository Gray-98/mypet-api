'use strict';

const health = require('./health');
const fileRoute = require('./file');
const foodRoute = require('./food');
const userRoute = require('./user');

module.exports = (app) => {
    app.use('/', health);
    app.use('/', fileRoute);

    app.use('/food', foodRoute);
    app.use('/users', userRoute);
};
