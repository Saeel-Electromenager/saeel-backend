const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const checkSecretKey = require("../middleware/check_secret_key");
const favoriteCtrl = require("../controlers/favorite");

router.get("/favorites/", checkSecretKey, auth, favoriteCtrl.getFavorites);
router.post("/modify", checkSecretKey, auth, favoriteCtrl.modifyFavorite);

module.exports = router;
