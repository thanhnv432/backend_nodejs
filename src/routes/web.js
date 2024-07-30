const express = require('express');
const { getHomepage, getAboutPage, getTrangCode } = require('../controllers/homeController');
const router = express.Router();

// router.Method('route', handler)


router.get('/', getHomepage)
  
router.get('/about', getAboutPage)
router.get('/trangcode', getTrangCode )

module.exports = router;