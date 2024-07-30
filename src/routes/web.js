const express = require('express');
const { getHomepage, getAboutPage, getTrangCode, postCreateUser } = require('../controllers/homeController');
const router = express.Router();

// router.Method('route', handler)


router.get('/home', getHomepage)

router.get('/about', getAboutPage)
router.get('/trangcode', getTrangCode)
router.post('/create-user', postCreateUser)

module.exports = router;