const mongoose = require('mongoose')

const exerciseModel = new mongoose.Schema({
    userName:{ type: String, required: true },
    description:{ type: String, required: true },
    duration:{ type: Number, required: true
    },
    date:{ type: Date, required: true }
}, { timestamps: true }
)

module.exports = mongoose.model('Exercise', exerciseModel)