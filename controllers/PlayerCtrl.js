
const Player = require('../models/Player')

createPlayer = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all fields',
        })
    }

    const item = new Player(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: item._id,
                message: 'Player created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Player created!',
            })
        })
}

updatePlayer = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Player.findOne({ _id: req.params.id }, (err, Playe) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Player not found!',
            })
        }
        Playe.id = body.id
        Playe.name = body.name
        Playe.dob = body.dob
        Playe.battinghand = body.battinghand
        Playe.bowlingskill = body.bowlingskill
        Playe.country = body.country
        Playe
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: Playe._id,
                    message: 'Player updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Player updated!',
                })
            })
    })
}

deletePlayer = async (req, res) => {
    await Player.findOneAndDelete({ _id: req.params.id }, (err, Playe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Playe) {
            return res
                .status(404)
                .json({ success: false, error: `Player not found` })
        }

        return res.status(200).json({ success: true, data: Playe })
    }).catch(err => console.log(err))
}

getPlayerById = async (req, res) => {
    await Player.findOne({ _id: req.params.id }, (err, Playe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Playe) {
            return res
                .status(404)
                .json({ success: false, error: `Player not found` })
        }
        return res.status(200).json({ success: true, data: Playe})
    }).catch(err => console.log(err))
}

getPlayer = async (req, res) => {
    await Player.find({}, (err, Playe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Playe.length) {
            return res
                .status(404)
                .json({ success: false, error: `Player not found` })
        }
        return res.status(200).json({ success: true, data: Player })
    }).catch(err => console.log(err))
}

module.exports = {
    createPlayer,
    updatePlayer,
    deletePlayer,
    getPlayer,
    getPlayerById,
}