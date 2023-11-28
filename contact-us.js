const express = require('express')

const router = express.Router()

const add = require('../controllers/contact-us')

router.get(add.getcontact)

router.post(add.postSuccess)

modules.exports = router;