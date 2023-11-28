const path = require('path');

const express = require('express');

const add = require('../controllers/product');

const router = express.Router();

router.get('/',add.getproduct);

module.exports = router;