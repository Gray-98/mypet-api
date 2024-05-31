'use strict';

const bcrypt = require('bcrypt')
const config = require('config')
const jwt = require('jsonwebtoken')
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

const verifyUserMethod = async ({ name, password }) => {
    const user = await User.findOne({
        where: { name }
    })
    if(!user) {
        throw new Error('User not exists')
    }
    if (bcrypt.compareSync(password, user.password)) {
        return jwt.sign({ password }, config.get('secretKey'), { expiresIn: '1d' })
    } else {
        throw new Error('Invalid name or password')
    }
}

module.exports = {
    createUserMethod,
    verifyUserMethod
}