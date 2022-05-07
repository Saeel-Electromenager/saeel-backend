const express = require("express");
const router = express.Router();

const checkSecretKey = require("../middleware/check_secret_key");
const adressCtrl = require("../controlers/adress");

router.post("/add", checkSecretKey, adressCtrl.addAdress);
router.post("/modify", checkSecretKey, adressCtrl.modifyAdress);
router.put("/delete/:id", checkSecretKey, adressCtrl.deleteAdress);

module.exports = router;
