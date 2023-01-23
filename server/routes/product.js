const express = require("express");
const router = express.Router();
const { addProduct, getAllProducts } = require("../controllers/product");

// *** This route created to add products to the database ***
router.post("/", addProduct);

// get all products
router.get("/", getAllProducts);

module.exports = router;
