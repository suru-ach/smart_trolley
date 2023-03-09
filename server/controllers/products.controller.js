const Product = require('../models/products.model')
const fs = require('fs')

const addSingleProduct = async (req, res) => {
    const { Product_ID, Product_Name, Cost } = req.body;
    try {
        if (await Product.getProduct(Product_ID).then(result=>result.length) === 0) {
            await Product.addSingleProduct({Product_ID, Product_Name, Cost})
            return res.status(200).send({ 'message': "success",data: await Product.getAllProducts() })
        }
        return res.status(200).send({ 'message': "Product already Exists"})
    } catch (error) {
        console.log(error);
    }
}

const addMultipleProducts = async (req, res) => {
    fs.readFile(req.file.path, async (err, data) => {
        if (err) throw (err);
        const payload = JSON.parse(data.toString());
        await Product.addMultipleProducts(payload.data);
    });
    return res.status(200).json({ status: "success", data: await Product.getAllProducts() });
}

const getAllProducts = async (req, res) => {
    try {
        return res.status(200).send({ 'message': "success", data:await Product.getAllProducts()})
    } catch (error) {
        console.log(error);
        return
    }
}

module.exports = {addSingleProduct, addMultipleProducts, getAllProducts}