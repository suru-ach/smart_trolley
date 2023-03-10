const express = require('express')
const router = express.Router()
const { addProduct, getPreviousBills } = require('../controllers/bill.controller')

router.post('/api/addProduct', addProduct)
router.get('/api/previousBills', getPreviousBills)
// router.post("/api/deleteFromBill", deleteProduct)

module.exports = router