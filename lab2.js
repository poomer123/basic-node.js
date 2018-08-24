// connect
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shopper')
mongoose.Promise = global.Promise


// Model
var User = require('./userModel')

// update 1
// User.findByIdAndUpdate('5b7f7539f3a4a2357093bcc7', {age: 22}, {new: true}, (err, data) => {
//     if(err) console.log(err)
//     console.log('User find id : ', data)
// })


User.findOneAndUpdate({firstname: 'John 3'}, {age: 14}, {new: true, upsert: true}, (err, data) => {
    if(err) console.log(err)
    console.log('User findOneAndUpdate : ', data)
})