const express = require("express");
const router = express.Router();
const checkSecretKey = require("../middleware/check_secret_key");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const userCtrl = require("../controlers/user");

router.get("/", checkSecretKey, auth, userCtrl.getAllUsers);
router.put("/:idUser", checkSecretKey, auth, userCtrl.getUser);
router.post("/signup", checkSecretKey, userCtrl.signup);
router.post("/login", checkSecretKey, userCtrl.login);
router.post("/modify", checkSecretKey, auth, userCtrl.modify);
router.get("/providers", checkSecretKey, auth, admin, userCtrl.getProviders);
router.get("/moderators", checkSecretKey, auth, userCtrl.getModerators);

router.post(
  "/confirme-email-get-code",
  checkSecretKey,
  userCtrl.confirmeEmailCreateCode
);
router.post("/confirme-email-code", checkSecretKey, userCtrl.confirmeEmail);

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

router.put(
  "/upgrade/:idUser",
  checkSecretKey,
  auth,
  admin,
  userCtrl.upgradeUser
);

module.exports = router;
