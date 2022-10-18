
const Match = require('../models/Match')

createMatch = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const Match = new Match(body)

    if (!Match) {
        return res.status(400).json({ success: false, error: err })
    }

    Match
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: Match._id,
                message: 'Match created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Match not created!',
            })
        })
}

updateMatch = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Match.findOne({ _id: req.params.id }, (err, Match) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Match not found!',
            })
        }
        Match.Match_ID = body.Match_ID
        Match.Match_Date = body.Match_Date 
        Match.Team_Name_Id= body.Team_Name_Id
        Match.Opponent_Team_ID= body.Opponent_Team_ID
        Match.Season_ID= body.Season_ID
        Match.Venue_Name= body.Venue_Name
        Match.Toss_Winner_Id= body.Toss_Winner_Id
        Match.Toss_Decision= body.Toss_Decision
        Match.Is_Superover= body.Is_Superover
        Match.Is_Result= body.Is_Result 
        Match.Is_DuckWorthLewis= body.Is_DuckWorthLewis
        Match.Win_Type= body.Win_Type
        Match.Won_By= body.Won_By
        Match.Match_Winner_Id= body.Match_Winner_Id 
        Match.Man_of_the_Match= body.Man_of_the_Match
        Match.First_Umpire_Id= body.First_Umpire_Id
        Match.Second_Umpire_Id= body.Second_Umpire_Id
        Match.City_Name= body.City_Name 
        Match.Host_Country= body.Host_Country
        Match
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: Match._id,
                    message: 'Match updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Match not updated!',
                })
            })
    })
}

deleteMatch = async (req, res) => {
    await Match.findOneAndDelete({ _id: req.params.id }, (err, Match) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Match) {
            return res
                .status(404)
                .json({ success: false, error: `Match not found` })
        }

        return res.status(200).json({ success: true, data: Match })
    }).catch(err => console.log(err))
}

getMatchById = async (req, res) => {
    await Match.findOne({ _id: req.params.id }, (err, Match) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Match) {
            return res
                .status(404)
                .json({ success: false, error: `Match not found` })
        }
        return res.status(200).json({ success: true, data: Match })
    }).catch(err => console.log(err))
}

getMatch = async (req, res) => {
    await Match.find({}, (err, Match) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Match.length) {
            return res
                .status(404)
                .json({ success: false, error: `Match not found` })
        }
        return res.status(200).json({ success: true, data: Match })
    }).catch(err => console.log(err))
}

module.exports = {
    createMatch,
    updateMatch,
    deleteMatch,
    getMatch,
    getMatchById,
}