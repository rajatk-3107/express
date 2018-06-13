var mongoose = require('mongoose')
var Schema = mongoose.Schema

var login = new Schema({
    email: String,
    name: String,
    password: String
})

module.exports = mongoose.model('login', login)