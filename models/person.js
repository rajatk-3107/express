var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var person = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    age: Number,
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        pincode: Number
    },
    phone: Number,
    createdAt: {
        type: Date,
        default: new Date(),
        required: true
    },
    createdBy: String

})

module.exports = mongoose.model('people', person);


// npm i mongoose --save