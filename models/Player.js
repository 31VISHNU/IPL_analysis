const mongoose = require('mongoose')
const Schema = mongoose.Schema

const player = new Schema(
    {
        id:{type:Number, required:true},
        name: { type: String, required: true },
        dob: { type: String, required: true },
        battinghand: { type: String, required: true },
        bowlingskill: { type: String, required: true },
        country: { type: String, required: true },
    },
    {collection:'player'}
)

module.exports = mongoose.model('player',player)