var express = require('express')
var router = express.Router()
var User = require('../models/userModel')


/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find().sort({created_date: -1}).exec((err, data) => {
        res.render('users', {users : data})
    })
})

router.post('/add', function(req, res, next) {
    console.log(req.body)
    var doc = new User(req.body)
    doc.save((err, data) => {
        if(err) console.log(err)
        res.redirect('/users')
    })
})


router.post('/delete/:_id', function(req, res, next) {
    User.findByIdAndRemove(req.params._id, (err, data) => {
        if(err) console.log(err)
        res.redirect('/users')
    })
})


router.get('/edit/:_id', function(req, res, next) {
    User.findById(req.params._id, (err, data) => {
        if(err) console.log(err)
        res.render('users', {user: data})
    })
})

router.post('/edit/:_id', function(req, res, next) {
    User.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
        if(err) console.log(err)
        res.redirect('/users')
    })
})

module.exports = router;
