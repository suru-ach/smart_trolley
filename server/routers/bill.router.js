const router = require('express').Router();

const { addProduct, getProducts } = require('../controllers/bill.controller');

router.route('/api/addproduct').post(addProduct);
router.route('/api/getproducts').get(getProducts);

module.exports = router;