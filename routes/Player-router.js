const express = require('express')

const PlayerCtrl = require('../controllers/PlayerCtrl')

const router = express.Router()


router.post('/item', PlayerCtrl.createPlayer)
router.put('/Playe/:id', PlayerCtrl.updatePlayer)
router.delete('/Playe/:id', PlayerCtrl.deletePlayer)
router.get('/Playe/:id', PlayerCtrl.getPlayerById)
router.get('/Playe', PlayerCtrl.getPlayer)
module.exports = router