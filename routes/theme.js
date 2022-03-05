const express = require('express');
const router = express.Router();

const themeController = require('../controllers/theme');

router.get('/:themeName', themeController.getTheme);

module.exports = router;
