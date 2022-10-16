const express = require('express')

const matchCtrl = require('../controllers/matchCtrl')
const playerCtrl = require('../controllers/playerCtrl')
const teamCtrl = require('../controllers/teamCtrl')

const router = express.Router()


router.post('/Creatematch', matchCtrl.creatematch)
router.post('/Createplayer', playerCtrl.createplayer)
router.post('/Createteam', teamCtrl.createteam)


router.post('/Updatematch', matchCtrl.updatematch)
router.post('/Updateplayer', playerCtrl.updateplayer)
router.post('/Updateteam', teamCtrl.updateteam)



router.get('/match/:id', matchCtrl.getmatchById)
router.get('/match', matchCtrl.getmatch)

module.exports = router