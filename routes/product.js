const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const checkSecretKey = require("../middleware/check_secret_key");
const productCtrl = require("../controlers/product");

router.get("/", checkSecretKey, productCtrl.getProduct);
router.put("/:idProduct", checkSecretKey, productCtrl.getProduct);
router.get("/new-products", checkSecretKey, auth, productCtrl.newProducts);
router.put(
  "/provider-products/:idProvider",
  checkSecretKey,
  auth,
  productCtrl.providerProducts
);
router.get("/top-saeel", checkSecretKey, productCtrl.topSaeel);
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
