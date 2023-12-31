const router = require('express').Router()
let Exercise = require('../models/exercise.model')

router.route('/')
    .get((req, res) => {
        Exercise.find()
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
        const description = req.body.description
        const duration = Number(req.body.duration)
        const date = Date.parse(req.body.date)

        const newUser = new Exercise({
            userName,
            description,
            duration,
            date
        })

        newUser.save()
            .then(() => {
                res.status(201).json('Exercise added!')
            })
            .catch(err => {
                res.status(400).json(`Error: ${err.message}`)
            })
    })

router.route('/:id')
    .get((req, res) => {
        Exercise.findById(req.params.id)
            .then(exercise => {
                res.status(200).json(exercise)
            })
            .catch(err => {
                res.status(400).json(`Error: ${err.message}`)
            })
    })

router.route('/:id')
    .delete((req, res) => {
        Exercise.findByIdAndDelete(req.params.id)
            .then(() => {
                res.status(200).json('Exercise deleted')
            })
            .catch(err => {
                res.status(400).json(`Error: ${err.message}`)
            })
    })

router.route('/update/:id')
    .post((req, res) => {
        Exercise.findById(req.params.id)
            .then(exercise => {
                exercise.userName = req.body.userName
                exercise.description = req.body.description
                exercise.duration = Number(req.body.duration)
                exercise.date = Date.parse(req.body.date)
                exercise.save()
                    .then(() => {
                        res.status(201).json('Exercise updated')
                    })
                    .catch(err => {
                        res.status(400).json(`Error: ${err.message}`)
                    })
                
            })
            .catch(err => {
                res.status(400).json(`Error: ${err.message}`)
            })
    })

module.exports = router