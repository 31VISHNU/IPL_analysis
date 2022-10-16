
const team = require('../models/team')

createteam = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const item = new team(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: team._id,
                message: 'team created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'team created!',
            })
        })
}

updateteam = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    team.findOne({ _id: req.params.id }, (err, team) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'team not found!',
            })
        }
        team.team_Name = body.team_Name
        team.team_ID = body.team_ID 
        team.team_Short_Code = body.team_Short_Code
        team
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: team._id,
                    message: 'team updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'team updated!',
                })
            })
    })
}

deleteteam = async (req, res) => {
    await Members.findOneAndDelete({ _id: req.params.id }, (err, team) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!team) {
            return res
                .status(404)
                .json({ success: false, error: `team not found` })
        }

        return res.status(200).json({ success: true, data: team })
    }).catch(err => console.log(err))
}

getteamById = async (req, res) => {
    await team.findOne({ _id: req.params.id }, (err, team) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!team) {
            return res
                .status(404)
                .json({ success: false, error: `team not found` })
        }
        return res.status(200).json({ success: true, data: team})
    }).catch(err => console.log(err))
}

getteam = async (req, res) => {
    await team.find({}, (err, team) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!team.length) {
            return res
                .status(404)
                .json({ success: false, error: `team not found` })
        }
        return res.status(200).json({ success: true, data: team })
    }).catch(err => console.log(err))
}

module.exports = {
    createteam,
    updateteam,
    deleteteam,
    getteamById,
    getteam,
}