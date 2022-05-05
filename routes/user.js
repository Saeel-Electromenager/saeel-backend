const express = require("express");
const router = express.Router();
const checkSecretKey = require("../middleware/check_secret_key");
const auth = require("../middleware/auth");

const userCtrl = require("../controlers/user");

router.post("/signup", checkSecretKey, userCtrl.signup);
router.post("/login", checkSecretKey, userCtrl.login);
router.post("/forget-password", checkSecretKey, userCtrl.forgetPassword);
router.post("/modify", checkSecretKey, auth, userCtrl.modify);

module.exports = router;
