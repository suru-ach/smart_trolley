const router = require('express').Router();
const fs = require('fs');
const upload = require('../utils/fileUpload.util');

const Products = require('../models/products.model');

router.route('/api/dropDB').get((req, res) => {
    require('../database/scripts/dropDB');
    res.status(200).json({ status: "success", data: null });
});

router.route('/api/createDB').get((req, res) => {
    require('../database/scripts/createDB');
    res.status(200).json({ status: "success", data: null });
});

router.route('/api/createUserTable').get((req, res) => {
    require('../database/scripts/createUserTable');
    res.status(200).json({ status: "success", data: null });
});

router.route('/api/createProductsTable').get((req, res) => {
    require('../database/scripts/createProductsTable');
    res.status(200).json({ status: "success", data: null });
});

router.route('/api/createBillTable').get((req, res) => {
    require('../database/scripts/createBillTable');
    res.status(200).json({ status: "success", data: null });
});

router.route('/api/getProducts').get(async (req, res) => {
    const data = await Products.getProducts();
    res.status(200).json({ status: "success", data: data });
});

router.route('/api/admin/addProduct').post(async (req, res) => {
    const { cost, id, name } = req.body;
    const data = await Products.addProduct(id, name, cost);
    res.status(200).json({ status: "success", data: null });
});

router.route('/api/admin/addproducts').post(upload, (req, res) => {
    const file = fs.readFile('./database/adminUploads/' + req.file.originalname, async (err, data) => {
        if (err) throw (err);
        const payload = JSON.parse(data.toString());
        await Products.addMultipleProducts(payload.data);
    });
    return res.status(200).json({ status: "success", data: null });
});

module.exports = router;