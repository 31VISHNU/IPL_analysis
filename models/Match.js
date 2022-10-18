const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Match = new Schema(
    {
        Match_ID: { type: String, required: true },
        Match_Date: { type: Number, required:false},
        Team_Name_Id: { type: Number, required: true },
        Opponent_Team_ID: { type: [String], required: true },
        Season_ID: { type: String, required: true },
        Venue_Name: { type: String, required: true },
        Toss_Winner_Id: { type: String, required: true },
        Toss_Decision: { type: Number, required:false},
        Is_Superover: { type: Number, required: true },
        Is_Result: { type: [String], required: true },
        Is_DuckWorthLewis: { type: String, required: true },
        Win_Type: { type: String, required: true },
        Won_By: { type: String, required: true },
        Match_Winner_Id: { type: String, required: true },
        Man_of_the_Match: { type: String, required: true },
        First_Umpire_Id: { type: Number, required:false},
        Second_Umpire_Id: { type: Number, required: true },
        City_Name: { type: [String], required: true },
        Host_Country: { type: String, required: true }
    },
    {collection:'Match'}
);

module.exports = mongoose.model('Match', Match)