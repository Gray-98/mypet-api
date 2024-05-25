'use strict';

const bcrypt = require('bcrypt')
const { User } = require('../models')

const createUserMethod = async ({ name, password }) => {
    const user = await User.findOne({
        where: { name }
    });
    if (!user) {
        await User.create({ name, password: bcrypt.hashSync(password, bcrypt.genSaltSync()) })
    } else {
        throw new Error('UserAlreadyExists')
    }
}

module.exports = {
    createUserMethod
}