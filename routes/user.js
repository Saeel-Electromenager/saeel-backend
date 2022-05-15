const express = require("express");
const router = express.Router();
const checkSecretKey = require("../middleware/check_secret_key");
const auth = require("../middleware/auth");

const userCtrl = require("../controlers/user");

router.get("/", checkSecretKey, auth, userCtrl.getAllUsers);
router.get("/:idUser", checkSecretKey, auth, userCtrl.getUser);
router.post("/signup", checkSecretKey, userCtrl.signup);
router.post("/login", checkSecretKey, userCtrl.login);
router.post("/modify", checkSecretKey, auth, userCtrl.modify);

router.post(
  "/confirme-email-get-code",
  checkSecretKey,
  auth,
  userCtrl.confirmeEmailCreateCode
);
router.post(
  "/confirme-email-code",
  checkSecretKey,
  auth,
  userCtrl.confirmeEmail
);

router.post(
  "/forget-password-setter",
  checkSecretKey,
  userCtrl.forgetPasswordSetter
);
router.post(
  "/forget-password-getter",
  checkSecretKey,
  userCtrl.forgetPasswordGetter
);

router.post("/upgrade", checkSecretKey, auth, userCtrl.upgradeUser);

module.exports = router;
