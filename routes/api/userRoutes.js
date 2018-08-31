var express = require('express')
var router = express.Router()
var User = require('../../models/userModel')
var _ = require('lodash')

// Get Users
router.get('/', (req, res, next) => {
    User.find().exec((err, data) => {
        if(err) {
            return res.status(500).send({
                error : {message: err.message, code: err.code}
            })
        }
        res.status(200).send(data)
    })
})

// Get User by Id
router.get('/:_id', (req, res, next) => {
    User.findById(req.params._id).exec((err, data) => {
        if(err) {
            return res.status(500).send({
                error : {message: err.message, code: err.code}
            })
        }
        res.status(200).send(data)
    })
})


// Create User


// Delete User


// Update User


module.exports = router