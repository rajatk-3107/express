var express = require('express')
var router = express.Router()
var tokenVerify = require('./tokenVerify')

var addPerson = require('./addPerson')
router.post('/addPerson', tokenVerify.tokenVerify, addPerson.addPerson)

var register = require('./registeration')
router.post('/register', register.registration)

var login = require('./login') //{ login: }
router.post('/login', login.login)

var getPerson = require('./getPerson')
router.get('/getPersons', tokenVerify.tokenVerify, getPerson.getPerson)


module.exports = router