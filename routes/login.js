var dbLogin = require('../models/login')
var jwt = require('jsonwebtoken')

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error in database, PLease try again after some"
                })
            } else if (!loginData || loginData == null) {
                res.json({
                    success: false,
                    msg: "Please register first"
                })
            } else if (loginData.password == req.body.password) {
                var data = {
                    name: loginData.name,
                    email: loginData.email
                }
                var token = jwt.sign(data, req.app.get('secretKey'));
                res.json({
                    success: true,
                    msg: "Login successful",
                    token: token
                })
            } else {
                res.json({
                    success: false,
                    msg: "Password Incorrect"
                })
            }
        })
    }
}