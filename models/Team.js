const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Team = new Schema(
    {
        Team_ID: { type: String, required: false },
        Team_Name: { type: String, required: false },
        Team_Short_Code: { type: String, required: false },
    },
    {collection:'Team'}
);

module.exports = mongoose.model('Team', Team)