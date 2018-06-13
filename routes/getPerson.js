var dbPerson = require('../models/person')

exports.getPerson = (req, res) => {
    dbPerson.find({ createdBy: req.decoded.email }, (err, data) => {
        if (!err) {
            res.json({
                success: true,
                msg: "Data",
                data: data
            })
        } else {
            res.json({
                success: false,
                msg: "Error"
            })
        }
    })
}