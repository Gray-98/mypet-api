'use strict';

const { createUserMethod } = require('../methods/user')

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

module.exports = {
    createUserHandler
}