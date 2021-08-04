const express = require('express'),
router = express.Router(),
client = require('../controllers/client')

router.get('/:clientid',client.clients)

module.exports = router 