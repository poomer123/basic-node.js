// connect
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shopper')
mongoose.Promise = global.Promise


// Model
var User = require('./userModel')

// insert
var person = new User({
    firstname: 'John 1',
    lastname: 'Wick 1',
    email: 'john889911@wick.com',
    age: 42,
    status: 'active',
    created_date: 01-01-2018
})
person.save((err, data) => {
    if(err) console.log(err)
    console.log('save successfully : ', data)
})