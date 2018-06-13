var dbLogin = require('../models/login')

exports.registration = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "please enter all details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, login) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Please try again after some time."
                })
            } else if (!login || login == undefined) {
                new dbLogin({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }).save((err, savedData) => { //.save().exec()  abc.then(data=>{})
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Please try again after some time."
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Registeration done"
                        })
                    }
                })
            } else {
                res.json({
                    success: false,
                    msg: "You have already registered"
                })
            }
        })
    }
}