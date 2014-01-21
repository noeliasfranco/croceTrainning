var Scheme = require('mongoose').Schema

var users_Scheme = new Scheme({
    name : String,
    email : String
})

module.exports = users_Scheme