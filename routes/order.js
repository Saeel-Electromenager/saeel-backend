const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const checkSecretKey = require("../middleware/check_secret_key");
const orderCtrl = require("../controlers/order");

router.get("/", orderCtrl.getMyOrders);

module.exports = router;
