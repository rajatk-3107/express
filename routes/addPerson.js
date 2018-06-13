var dbPerson = require('../models/person')


exports.addPerson = (req, res) => {
    if (!req.body.name || !req.body.email) {
        res.json({
            success: false,
            msg: "PleASE ENTER ALL DETAILS"
        })
    } else {
        new dbPerson({
            age: req.body.age,
            name: req.body.name,
            email: req.body.email,
            address: {
                line1: req.body.line2,
                line2: req.body.line1,
                city: req.body.city,
                state: req.body.state,
                pincode: req.body.pincode
            },
            phone: req.body.phone,
            createdBy: req.decoded.email
        }).save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error in database. Please try again"
                })
            } else {
                res.json({
                    success: true,
                    msg: "Data crested.",
                    data: data
                })
            }
        })
    }
}