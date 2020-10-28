'use strict';
const { Router } = require('express');
const tagController = require('./tagController');

const router = new Router();

router.post('/add/tags', tagController.addTags);
router.get('/get/tags', tagController.getTags);
router.get('/get/tags/:supplier', tagController.getTagBySupplier);

module.exports = router;
