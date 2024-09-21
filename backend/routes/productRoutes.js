// routes/productRoutes.js
const express = require('express');
const { getProducts } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts); // GET /api/products

// Other routes will be added here

module.exports = router;
