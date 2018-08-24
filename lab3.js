// connect
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shopper')
mongoose.Promise = global.Promise


// Model
var User = require('./userModel')

// Delete many 
// User.remove({firstname: 'John 2'}, (err, data) => {
//     if(err) console.log(err)
//     console.log('remove successfully : ', data)
// })


// Delete one by id
// User.findByIdAndRemove('5b7f7c9181745b744463b569', (err, data) => {
//     if(err) console.log(err)
//     console.log('remove one by id successfully : ', data)
// })

// Delete one and remove
User.findOneAndRemove({firstname: 'John 1'}, (err, data) => {
    if(err) console.log(err)
    console.log('remove one successfully : ', data)
})