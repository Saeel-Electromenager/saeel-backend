const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const checkSecretKey = require("../middleware/check_secret_key");
const productCtrl = require("../controlers/product");

router.get("/", productCtrl.getProduct);
router.put("/:idProduct", productCtrl.getProduct);
router.get("/top-rated", productCtrl.topRated);
router.get("/best-saeel", productCtrl.bestSaeel);
router.post("/add", checkSecretKey, auth, productCtrl.addProduct);
router.post("/modify", checkSecretKey, auth, productCtrl.modifyProduct);
router.put("/delete/:id", checkSecretKey, auth, productCtrl.deleteProduct);
router.put(
  "/search/:idCategory/:searchKey",
  checkSecretKey,
  auth,
  productCtrl.searchProducts
);

module.exports = router;
