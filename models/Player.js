const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Player = new Schema(
    {
        id:{type:String, required:false},
        name: { type: String, required: false },
        dob: { type: String, required: false },
        battinghand: { type: String, required: false },
        bowlingskill: { type: String, required: false },
        country: { type: String, required: false },
    },
    {collection:'Player'}
)

module.exports = mongoose.model('Player',Player)