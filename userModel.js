var mongoose = require('mongoose')

// Schema
var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    age: Number,
    status: String,
    created_date: Date
})

// Model
var User = mongoose.model('Users', userSchema)
module.exports = User