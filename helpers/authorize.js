const expressJwt = require('express-jwt');
const { secret } = require('../config');

module.exports = (roles = []) => {
    if (typeof roles === 'number') {
        roles = [roles];
    }

    return [expressJwt({secret}), 
        (req, res, next) => {
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(401).json({message: 'Unauthorized'});
            }

            next();
        }
    ]
}