'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/customer-controller');

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/:idclient', controller.getById)
module.exports = router;