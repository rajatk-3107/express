var express = require('express')
var router = express.Router()

var addPerson = require('./addPerson')
router.post('/addPerson', addPerson.addPerson)



module.exports = router