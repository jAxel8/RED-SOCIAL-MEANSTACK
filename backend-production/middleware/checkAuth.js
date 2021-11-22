const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization
        req.user = jwt.verify(token, 'clavesecreta')
        next();

    } catch (error) {
        console.log('failed')
        res.status(401).json('Auth failed')
    }
}