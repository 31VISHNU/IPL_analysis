
const player = require('../models/player')

createplayer = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const Play = new player(body)

    if (!Play) {
        return res.status(400).json({ success: false, error: err })
    }

    Play
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: player._id,
                message: 'player created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'player not created!',
            })
        })
}

updateplayer = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    player.findOne({ _id: req.params.id }, (err, player) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'player not found!',
            })
        }
        player.id = body.id
        player.name = body.name
        player.dob = body.dob
        player.battinghand = body.battinghand
        player.bowlingskill = body.bowlingskill
        player.country = body.country
        player
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: player._id,
                    message: 'player updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'player not updated!',
                })
            })
    })
}

deleteplayer = async (req, res) => {
    await player.findOneAndDelete({ _id: req.params.id }, (err, player) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!player) {
            return res
                .status(404)
                .json({ success: false, error: `player not found` })
        }

        return res.status(200).json({ success: true, data: player })
    }).catch(err => console.log(err))
}

getplayerById = async (req, res) => {
    await player.findOne({ _id: req.params.id }, (err, Pla) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Pla) {
            return res
                .status(404)
                .json({ success: false, error: `player not found` })
        }
        return res.status(200).json({ success: true, data: Pla })
    }).catch(err => console.log(err))
}

getplayer = async (req, res) => {
    await player.find({}, (err, Pla) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Pla.length) {
            return res
                .status(404)
                .json({ success: false, error: `player not found` })
        }
        return res.status(200).json({ success: true, data: Pla })
    }).catch(err => console.log(err))
}

module.exports = {
    createplayer,
    updateplayer,
    deleteplayer,
    getplayer,
    getplayerById,
}