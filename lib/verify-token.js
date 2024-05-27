'use strict';

const jwt = require('jsonwebtoken');
const config = require('config');

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['authentication'];
        if (!token) {
            return res.status(401).json({ msg: 'Token not exist' })
        }

        const decoded = jwt.verify(token, config.get('secretKey'))
        req.user = decoded
        await next()
    } catch (e) {
        return res.status(403).json({ msg: e.message })
    }
}

module.exports = {
    verifyToken
}