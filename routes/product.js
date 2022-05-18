const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const checkSecretKey = require("../middleware/check_secret_key");
const productCtrl = require("../controlers/product");

router.get("/", checkSecretKey, productCtrl.getProduct);
router.put("/:idProduct", checkSecretKey, productCtrl.getProduct);
router.get("/top-rated", checkSecretKey, productCtrl.topRated);
router.put("/new-product/:idProvider", checkSecretKey, productCtrl.newProducts);
router.get("/provider-products", checkSecretKey, productCtrl.topRated);
router.get("/best-saeel", checkSecretKey, productCtrl.bestSaeel);
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
