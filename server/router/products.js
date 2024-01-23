const express = require("express");
const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require("../controller/products");

const router = express.Router();

router.post("/product",createProduct);
router.get("/product/:id",getProduct)
router.get("/products",getProducts);
router.put("/product/:id",updateProduct);
router.delete("/product/:id",deleteProduct);

module.exports = router;
