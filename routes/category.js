const express = require("express");
const router = express.Router();

const categoryCtrl = require("../controlers/category");

router.post("/add", categoryCtrl.add);
router.post("/modify", categoryCtrl.modify);
router.post("/delete", categoryCtrl.delete);

module.exports = router;
