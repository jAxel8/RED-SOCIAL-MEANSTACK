'use-strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clavesecreta';

exports.createToken = function(user)
{
    var payload = {
        sub: user._id,
        user:user.username,
        iat : moment().unix(),
        exp: moment().add(1,'days').unix()

    }

    return jwt.encode(payload,secret);
}