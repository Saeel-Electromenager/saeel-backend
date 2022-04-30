const express = require("express");
const router = express.Router();
const verifySecretMessage = require("../middleware/check_secret_key");

const userCtrl = require("../controlers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.post("/modify", userCtrl.modify);
router.post("/test", verifySecretMessage, (req, res) => {
  res.status(200).json({ message: "c'est ok!" });
});

module.exports = router;
