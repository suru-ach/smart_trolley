const router = require('express').Router();
const fs = require('fs');
const upload = require('../utils/fileUpload.util');

const pool = require('../database/config/db');
const Products = require('../models/products.model');

router.route('/api/dropDB').get((req, res) => {
    require('../database/scripts/dropDB');
    res.status(200).json({status: "success", data: null});
});

router.route('/api/createDB').get((req, res) => {
    require('../database/scripts/createDB');
    res.status(200).json({status: "success", data: null});
});

router.route('/api/createUserTable').get((req, res) => {
    require('../database/scripts/createUserTable');
    res.status(200).json({status: "success", data: null});
});

router.route('/api/createProductsTable').get((req, res) => {
    require('../database/scripts/createProductsTable');
    res.status(200).json({status: "success", data: null});
});

router.route('/api/addProducts').post(upload ,(req, res) => {
    const file = fs.readFile('./database/adminUploads/'+req.file.originalname,async (err, data) => {
        if(err) throw (err);
        const payload = JSON.parse(data.toString());
        await Products.addMultipleProducts(payload.data);
    });
    return res.status(200).json({status: "success", data: null});
});

module.exports = router;