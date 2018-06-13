var jwt = require('jsonwebtoken')

exports.tokenVerify = (req, res, next) => {
    if (!req.headers['x-access-token']) {
        res.json({
            success: false,
            msg: "Please login first."
        })
    } else {
        var token = req.headers['x-access-token']
        jwt.verify(token, req.app.get('secretKey'), (err, decoded) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Authentication failure"
                })
            } else {
                req.decoded = decoded;
                next();
            }
        })
    }
}