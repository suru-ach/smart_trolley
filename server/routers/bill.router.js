const router = require('express').Router();

const { addProduct } = require('../controllers/bill.controller');

router.route('/api/addProduct').post(addProduct);

module.exports = router;