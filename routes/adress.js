const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const checkSecretKey = require("../middleware/check_secret_key");
const adressCtrl = require("../controlers/adress");

router.post("/add", checkSecretKey, auth, adressCtrl.addAdress);
router.post("/modify", checkSecretKey, auth, adressCtrl.modifyAdress);
router.put("/delete/:id", checkSecretKey, auth, adressCtrl.deleteAdress);

module.exports = router;
