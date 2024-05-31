'use strict';

const { createUserMethod, verifyUserMethod } = require('../methods/user')

const createUserHandler = async ({ name, password }, res) => {
    try {
        await createUserMethod({ name, password })
        return res.json({ message: 'success' })
    } catch (e) {
        if (e.message === 'UserAlreadyExists') {
            return res.status(403).json({ msg: e.message })
        }
        return res.status(500).json({ msg: e.message })
    }

}

const verifyUserHandler = async ({ name, password }, res) => {
    try {
        const token = await verifyUserMethod({ name, password })
        res.cookie('myPet_auth', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
        return res.json({ msg: 'success' })
    } catch (e) {
        if (e.message === 'Invalid name or password' || e.message === 'User not exists') {
            return res.status(401).json({ msg: e.message })
        }
        return res.status(500).json({ msg: e.message })
    }
}

module.exports = {
    createUserHandler,
    verifyUserHandler
}