const Bill = require('../models/bill.model');
const Products = require('../models/products.model');
let users_socket = new Map();
var billContainer = new Map();

async function socket(io) {
    io.on('connection', (socket) => {
        socket.on('join', async (data) => {
            if (!users_socket.has(data.cartID)) {
                users_socket.set(data.cartID, { socket })
            }
            users_socket.set(data.cartID, { socket })
            socket.emit('message', { status: "success", data: `welcome ${data.username}` });
        });

        socket.on('update-cart', async (data) => {
            updateBill(data.cartID);
        });

        socket.on('checkout', async (data) => {
            var bill;
            if (billContainer.has(data.cartID)) {
                ({ bill } = billContainer.get(data.cartID))
                if (bill.items.length !== 0) {
                    const { bill } = billContainer.get(data.cartID);
                    await bill.init(data.contact);
                    console.log(bill.transaction_id);
                    const res = await bill.checkoutBill();
                    if (res) {
                        billContainer.delete(data.cartID);
                        socket.emit('message', { status: "success", data: `checked out` });
                    } else {
                        socket.emit('message', { status: "error", data: `could not check out` });
                    }
                }
            }
            else {
                socket.emit("message", { status: "error", data: "Your cart is empty!" })
            }
        });

    });
}

const updateBill = (cartID) => {
    var result;
    if (billContainer.has(cartID)) {
        result = billContainer.get(cartID);
    }
    else {
        result = { bill: { items: [] } }
    }
    const uniqueSocket = users_socket.get(cartID)
    uniqueSocket.socket.emit('update-cart', { status: "success", data: result.bill.items });
};

const addProduct = async (req, res) => {
    const { cartID, barcode, productCode } = req.body;
    var bill = {};
    if (billContainer.has(cartID)) {
        bill = billContainer.get(cartID).bill;
    }
    else {
        bill = new Bill(cartID);
        billContainer.set(cartID, { bill });
    }
    try {
        const product_details = await Products.getProduct(barcode);
        bill.addItem({ productCode, ...product_details[0] });
        if (users_socket.has(cartID)) {
            updateBill(cartID);
        }
        res.status(200).send("Product Added");
    } catch (error) {
        console.log(error);
        res.send("An Error Occurred!");
    }
}

const getPreviousBills = async (req, res) => {
    const { contact } = req.query;
    try {
        const bills = await Bill.getPreviousBills(contact);
        res.status(200).json({ message: "success", data: bills })
    } catch (error) {
        console.log(error);
        res.send("An Error Occurred!");
    }
}

module.exports = { addProduct, socket, getPreviousBills }