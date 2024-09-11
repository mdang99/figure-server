const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/add', productController.addProduct);
router.delete('/delete/:id', productController.deleteProduct);
router.put('/update/:id', productController.updateProduct);

module.exports = router;
