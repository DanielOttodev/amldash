const express = require('express'),
router = express.Router(),
users = require('../controllers/users')

router.get('/',users.users)

module.exports = router 