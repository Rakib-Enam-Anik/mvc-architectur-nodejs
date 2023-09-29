const express = require("express");
const { getProducts, saveProducts } = require("../controllers/products.controller");


const router = express().Router;

router.get("/users", getProducts)
router.post("/users", saveProducts);

module.exports = router;