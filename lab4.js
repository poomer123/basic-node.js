// connect
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shopper')
mongoose.Promise = global.Promise


// Model
var User = require('./userModel')


// Find by id
// User.findById('5b7f7f2f81745b744463b5f7', (err, data) => {
//     if(err) console.log(err)
//     console.log('Find by id : ', data)
// })


// Find one
// User.findOne({$or : [{status: 'pending'}, {status: 'active'}], age: {$lt : 23}}, (err, data) => {
//     if(err) console.log(err)
//     console.log('Find one : ', data)
// })

// Find many
// User.find({$or : [{status: 'pending'}, {status: 'active'}], age: {$lt : 40}}, (err, data) => {
//     if(err) console.log(err)
//     console.log('Find many : ', data)
// })


// User.find().sort({age: -1}).limit(2).skip(2).exec((err, data) => {
//     if(err) console.log(err)
//     console.log('Find exec : ', data)
// })


User.find().where('age').gt(20).ne(33).exec((err, data) => {
    if(err) console.log(err)
    console.log('Find with where : ', data)
})