var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var config = require('./config/config.json')
var port = config.PORT
var routes = require('./routes/routes')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(config.MONGO, (err, data) => {
    if (err) {
        console.log("Database not connected")
    } else {
        console.log("Database connected")
    }
})

app.set('secretKey', config.secret)
app.use('/user', routes)

app.use(express.static(__dirname + '/dist'))
app.use(function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})


app.listen(port, err => {
    if (err) {
        console.log("Server not created")
    } else {

        console.log("Server running on port ", port)
    }
})