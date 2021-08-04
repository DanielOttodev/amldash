const express = require('express'),
router = express.Router(),
api = require('../controllers/api')

router.get('/',api.hello)

router.get('/tmalerts',api.tmalerts)
router.post('/tmalerts',api.postalert)
router.get('/tmalerts/total',api.tot_tmalerts)
router.get('/tasks',api.gettasks)



router.get('/chartnum',api.chartnum)

module.exports = router 