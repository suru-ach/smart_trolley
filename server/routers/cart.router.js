const express = require('express')
const router  = express.Router()
const {assignCart, resetCart} = require('../controllers/cart.controller')

router.route('/api/cartIDSubmit').post(assignCart);
router.route('/api/resetCart').post(resetCart);

module.exports = router;