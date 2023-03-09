const router = require('express').Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const pool = require('../database/config/db');
const { addMultipleProducts, addSingleProduct, getAllProducts } = require('../controllers/products.controller')

router.route('/api/addMultipleProducts').post(upload.single('productsFile'), addMultipleProducts);
router.route('/api/addSingleProduct').post(addSingleProduct);
router.route('/api/getAllProducts').get(getAllProducts);

module.exports = router;