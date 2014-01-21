var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trainning');
var db = mongoose.connection;

exports.connectionDB = function () {
    
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        console.log("Connected");
    });
};