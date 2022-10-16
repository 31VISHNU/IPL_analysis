const mongoose = require('mongoose')
const Schema = mongoose.Schema

const team = new Schema(
    {
        team_ID: { type: Number, required: true },
        team_Name: { type: String, required: true },
        team_Short_Code: { type: String, required: true },
    },
    {collection:'team'}
);

module.exports = mongoose.model('team', team)