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
router.post('/', (req, res, next) => {
    var doc = new User(req.body)
    doc.save((err, data) => {
        if(err) {
            return res.status(500).send({
                error : {message: err.message, code: err.code}
            })
        }
        res.status(200).send({
            success: {
                message: 'Created user successfully.'
            }
        })
    })
})

// Delete User
router.delete('/:_id', (req, res, next) => {
    User.findByIdAndRemove( req.params._id, (err, data) => {
        if(err) {
            return res.status(500).send({
                error : {message: err.message, code: err.code}
            })
        }
        res.status(200).send({
            success: {
                message: 'Deleted user successfully.'
            }
        })
    })
})

// Update User
router.put('/:_id', (req, res, next) => {
    User.findByIdAndUpdate( req.params._id, req.body, (err, data) => {
        if(err) {
            return res.status(500).send({
                error : {message: err.message, code: err.code}
            })
        }
        res.status(200).send({
            success: {
                message: 'Updated user successfully.'
            }
        })
    })
})


module.exports = router