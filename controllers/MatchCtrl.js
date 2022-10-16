const match = require('../models/match')

creatematch = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const item = new match(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: match._id,
                message: 'match created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'match created!',
            })
        })
}

updatematch = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    match.findOne({ _id: req.params.id }, (err, match) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'match not found!',
            })
        }
        match.match_ID = body.match_ID
        match.match_Date = body.match_Date 
        match.Team_Name_Id= body.Team_Name_Id
        match.Opponent_Team_ID= body.Opponent_Team_ID
        match.Season_ID= body.Season_ID
        match.Venue_Name= body.Venue_Name
        match.Toss_Winner_Id= body.Toss_Winner_Id
        match.Toss_Decision= body.Toss_Decision
        match.Is_Superover= body.Is_Superover
        match.Is_Result= body.Is_Result 
        match.Is_DuckWorthLewis= body.Is_DuckWorthLewis
        match.Win_Type= body.Win_Type
        match.Won_By= body.Won_By
        match.match_Winner_Id= body.match_Winner_Id 
        match.Man_of_the_match= body.Man_of_the_match
        match.First_Umpire_Id= body.First_Umpire_Id
        match.Second_Umpire_Id= body.Second_Umpire_Id
        match.City_Name= body.City_Name 
        match.Host_Country= body.Host_Country
        match
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: match._id,
                    message: 'match updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'match updated!',
                })
            })
    })
}

deletematch = async (req, res) => {
    await match.findOneAndDelete({ _id: req.params.id }, (err, match) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!match) {
            return res
                .status(404)
                .json({ success: false, error: `match not found` })
        }

        return res.status(200).json({ success: true, data: match})
    }).catch(err => console.log(err))
}

getmatchById = async (req, res) => {
    await match.findOne({ _id: req.params.id }, (err, match) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!match) {
            return res
                .status(404)
                .json({ success: false, error: `match not found` })
        }
        return res.status(200).json({ success: true, data: match})
    }).catch(err => console.log(err))
}

getmatch = async (req, res) => {
    await match.find({}, (err, match) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!match.length) {
            return res
                .status(404)
                .json({ success: false, error: `match not found` })
        }
        return res.status(200).json({ success: true, data:match })
    }).catch(err => console.log(err))
}

module.exports = {
    creatematch,
    updatematch,
    deletematch,
    getmatch,
    getmatchById,
}