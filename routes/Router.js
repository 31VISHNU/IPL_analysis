const express = require('express')

const MatchCtrl = require('../controllers/MatchCtrl')
const PlayerCtrl = require('../controllers/PlayerCtrl')
const TeamCtrl = require('../controllers/TeamCtrl')

const router = express.Router()


router.post('/CreateMatch', MatchCtrl.createMatch)
router.post('/CreatePlayer', PlayerCtrl.createPlayer)
router.post('/CreateTeam', TeamCtrl.createTeam)


router.post('/UpdateMatch',MatchCtrl.updateMatch)
router.post('/UpdatePlayer',PlayerCtrl.updatePlayer)
router.post('/UpdateTeam',TeamCtrl.updateTeam)



// router.put('/movie/:id', MovieCtrl.updateMovie)
// router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/Match/:id', MatchCtrl.getMatchById)
router.get('/Match', MatchCtrl.getMatch)

module.exports = router