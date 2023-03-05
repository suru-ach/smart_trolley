const router = require('express').Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const pool = require('../database/config/db');
const { addMultipleProducts, addSingleProduct, deleteProduct } = require('../controllers/products.controller')

router.route('/api/addMultipleProducts').post(upload.single('product'), addMultipleProducts);
router.route('/api/addSingleProduct').post(addSingleProduct);
router.route('/api/delete').post(deleteProduct);

module.exports = router;