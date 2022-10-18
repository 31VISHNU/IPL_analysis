const express = require('express')

const MatchCtrl = require('../controllers/Matchctrl')

const router = express.Router()


router.post('/Match', MatchCtrl.createMatch)
router.put('/Match/:id', MatchCtrl.updateMatch)
router.delete('/Match/:id', MatchCtrl.deleteMatch)
router.get('/Match/:id', MatchCtrl.getMatchById)
router.get('/Match', MatchCtrl.getMatch)

module.exports = router