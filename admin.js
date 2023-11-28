const path = require('path');

const express = require('express');

const add = require('../controllers/product');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product',add.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',add.postAddProduct);

module.exports = router;
