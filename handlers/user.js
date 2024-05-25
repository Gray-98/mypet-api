'use strict';

const { createUserMethod } = require('../methods/user')

const createUserHandler = async (req) => {
    const { name, password } = req.body;
    await createUserMethod({ name, password})
}

module.exports = {
    createUserHandler
}