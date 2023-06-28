const router = require('express').Router()
let User = require('../models/user.model')

router.route('/')
    .get((req, res) => {
        User.find()
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                res.status(400).json(`Error: ${err.message}`)
            })
    })

router.route('/add')
    .post((req, res) => {
        const userName = req.body.userName
        const newUser = new User({ userName })

        newUser.save()
            .then(() => {
                res.status(201).json('User added!')
            })
            .catch(err => {
                res.status(400).json(`Error: ${err.message}`)
            })
    })

module.exports = router