'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/product-controller');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/tags/:tag', controller.getByTag);
router.get('/admin/:id', controller.getById);//Diferente por causa de conflito de rotas
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;