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
        return res.json({ token })
    } catch (e) {
        if (e.message === 'Invalid name or password') {
            return res.status(401).json({ msg: e.message })
        }
        return res.status(500).json({ msg: e.message })
    }
}

module.exports = {
    createUserHandler,
    verifyUserHandler
}