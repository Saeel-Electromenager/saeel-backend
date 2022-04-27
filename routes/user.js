const express = require('express');
const router = express.Router();

const userCtrl = require('../controlers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/modify', userCtrl.modify);

module.exports = router;