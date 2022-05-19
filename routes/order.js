const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const checkSecretKey = require("../middleware/check_secret_key");
const orderCtrl = require("../controlers/order");

router.put("/orders/:idUser", checkSecretKey, auth, orderCtrl.getMyOrders);
router.post("/new", checkSecretKey, auth, orderCtrl.addOrder);
router.put("/:idOrder", checkSecretKey, auth, orderCtrl.getOrder);

module.exports = router;
