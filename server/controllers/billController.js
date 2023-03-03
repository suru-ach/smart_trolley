const BillProduct = require('../models/bill.model')
const { Server } = require("socket.io");

const io = new Server(5000, {
    cors: {
        origin: process.env.CLIENT_URL
    }
});

const socket = io.on("connection", (socket) => {
    console.log(socket.id);
    return socket
});

const addProduct = async (req, res) => {
    const { barcode, phone } = req.body;
    const product = new BillProduct(barcode, phone);
    try {
        if (await product.addToBill()) {
            const bill = await product.getAll();
            socket.emit('add-product', JSON.stringify({'payload': bill}))
            res.send("Product Added to cart")
        }
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = (addProduct)