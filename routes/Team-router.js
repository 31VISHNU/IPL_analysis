const express = require('express')

const TeamCtrl = require('../controllers/TeamCtrl')

const router = express.Router()


router.post('/item', TeamCtrl.createTeam)
router.put('/tea/:id', TeamCtrl.updateTeam)
router.delete('/tea/:id', TeamCtrl.deleteTeam)
router.get('/tea/:id', TeamCtrl.getTeamById)
router.get('/tea', TeamCtrl.getTeam)
module.exports = router