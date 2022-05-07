const express = require("express");
const router = express.Router();

const categoryCtrl = require("../controlers/category");

router.get("/", categoryCtrl.getCategories);
router.post("/add", categoryCtrl.addCategory);
router.post("/modify", categoryCtrl.modifyCategory);
router.put("/delete/:id", categoryCtrl.deleteCategory);

module.exports = router;
