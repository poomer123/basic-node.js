// connect
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shopper')
mongoose.Promise = global.Promise


// Model
var User = require('./userModel')

// insert
var person = new User({
    firstname: 'John 2',
    lastname: 'Wick 2',
    email: 'John 889911@wick.com ',
    age: 42,
    status: 'pending',
    // created_date: 01-01-2018
})
person.save((err, data) => {
    if(err) console.log(err)
    console.log('save successfully : ', data)
})