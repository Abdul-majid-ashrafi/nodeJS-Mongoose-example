var mongoose = require('mongoose');
var express = require('express')
var bodyParser = require('body-parser')
var dbURI = mongoose.connect('mongodb://localhost/test');

var app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoose schema
var testSchema = mongoose.Schema({
    name: String
});
// mongoose model
var userModel = mongoose.model('testModel', testSchema);
var users = new userModel({ name: 'Majid', age: 12 });


// post request api
app.post('/User', function (req, res) {
    var mod = new users(req.body)
    console.log('mod', mod)
        .save(function (err, data) {
            if (err) {
                console.log("SErVeR: ", err);
                res.send(err)
            }
            else {
                console.log("SerVeR DaTa : ", data);
                res.send("DaTa ReceVe: ", data)
            }
        })
})


module.exports = app;
app.listen(3000, function () {
    console.log("Runigggg")
});














// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});