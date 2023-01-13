const express = require('express');

const router = express.Router();
const {
  addProduct, getProducts, getProductById, updateProduct, deleteProduct,
} = require('../controllers/productsController');

const asyncWrapper = (controller) => (req, res, next) => controller(req, res, next).catch(next);

router.post('', asyncWrapper(addProduct));

router.get('', asyncWrapper(getProducts));

router.delete('/:id', asyncWrapper(deleteProduct));

router.put('/:id', asyncWrapper(updateProduct));

router.get('/:id', asyncWrapper(getProductById));

module.exports = router;
