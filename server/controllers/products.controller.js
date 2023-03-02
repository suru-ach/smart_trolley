const Product = require('../models/products.model')
const fs = require('fs')

const addSingleProduct = async (req, res)=>{
    const {barcode, product_name, cost} = req.body;
    const newProduct = new Product(barcode, product_name, cost);
    try {
        if (await newProduct.addProduct()) {
            return res.status(200).send({'message':"success"})
        }
    } catch (error) {
        console.log(error);
    }
}

const addMultipleProducts = (req,res)=>{
    fs.readFile(req.file.path, async (err, data) => {
        if (err) throw (err);
        const payload = JSON.parse(data.toString());
        await Product.addMultipleProducts(payload.data);
    });
    return res.status(200).json({ status: "success", data: null });
}

const deleteProduct = async(req,res)=>{
    const ProductToDelete = new Product(req.body.barcode);
    ProductToDelete.deleteProduct();
}

module.exports(addSingleProduct, addMultipleProducts, deleteProduct)