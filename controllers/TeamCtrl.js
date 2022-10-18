
const Team = require('../models/Team')

createTeam = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const item = new Team(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: item._id,
                message: 'Team created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Team created!',
            })
        })
}

updateTeam = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Team.findOne({ _id: req.params.id }, (err, tea) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Team not found!',
            })
        }
        tea.Team_Name = body.Team_Name
        tea.Team_ID = body.Team_ID 
        tea.Team_Short_Code = body.Team_Short_Code
        tea
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: tea._id,
                    message: 'Team updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Team updated!',
                })
            })
    })
}

deleteTeam = async (req, res) => {
    await Team.findOneAndDelete({ _id: req.params.id }, (err, tea) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tea) {
            return res
                .status(404)
                .json({ success: false, error: `Team not found` })
        }

        return res.status(200).json({ success: true, data: tea })
    }).catch(err => console.log(err))
}

getTeamById = async (req, res) => {
    await Team.findOne({ _id: req.params.id }, (err, tea) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tea) {
            return res
                .status(404)
                .json({ success: false, error: `Team not found` })
        }
        return res.status(200).json({ success: true, data: tea})
    }).catch(err => console.log(err))
}

getTeam = async (req, res) => {
    await Department.find({}, (err, tea) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tea.length) {
            return res
                .status(404)
                .json({ success: false, error: `Team not found` })
        }
        return res.status(200).json({ success: true, data: tea })
    }).catch(err => console.log(err))
}

module.exports = {
    createTeam,
    updateTeam,
    deleteTeam,
    getTeam,
    getTeamById,
}