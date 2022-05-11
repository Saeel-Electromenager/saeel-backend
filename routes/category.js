const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const checkSecretKey = require("../middleware/check_secret_key");
const categoryCtrl = require("../controlers/category");

router.get("/", checkSecretKey, categoryCtrl.getCategories);
router.post("/add", checkSecretKey, auth, categoryCtrl.addCategory);
router.post("/modify", checkSecretKey, auth, categoryCtrl.modifyCategory);
router.put("/delete/:id", checkSecretKey, auth, categoryCtrl.deleteCategory);

module.exports = router;
