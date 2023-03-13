const router = require('express').Router();

const { addProduct, getProducts } = require('../controllers/bill.controller');
const { auth_token_user } = require('../utils/auth.util');

router.route('/api/addproduct').post(addProduct);
router.route('/api/getproducts').get(auth_token_user,getProducts);

module.exports = router;