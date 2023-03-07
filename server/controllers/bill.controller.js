const Products = require('../models/products.model');
const Bill = require('../models/bill.model');

// global map of [ 'user-contact-number', { user_bill_data, user_socket } ]
let users_socket = new Map();

async function socket(io) {
    io.on('connection', (socket) => {
        socket.on('join', async(data) => {
            let user_bill;
            if(!users_socket.has(data.contact)) {
                user_bill = new Bill(data.contact);
                await user_bill.init();
                users_socket.set(`${data.contact}`, {socket, user_bill});
            }
            socket.emit('message', { status: "success", data: `welcome ${data.username}` });
        });
        
        socket.on('deleteItem', async (data) => {
            const { productID, contact } = data;
            const { user_bill } = users_socket.get(contact);
            user_bill.items = user_bill.items.filter(item => item.Product_ID !== productID);
            // user_bill.items = user_bill.items.filter(item => item.productCode !== productCode || item.Product_ID !== productID);
            socket.emit('message', { status: "success", data: `deleted`});
            socket.emit('add-items', { status: "success", data: user_bill.items });
        });
        
        socket.on('get-items' , async (data) => {
            const { user_bill } = users_socket.get(data.contact);
            socket.emit('add-items', { status: "success", data: user_bill.items });
        });
        
        socket.on('bill', async (data) => {
            const { user_bill } = users_socket.get(data.contact);
            const res = await user_bill.checkoutBill();
            if(res) {
                users_socket.delete(data.contact);
                socket.emit('message', { status: "success", data: `checked out`});
                user_bill.items = [];
                socket.emit('add-items', { status: "success", data: user_bill.items });
            } else {
                socket.emit('message', { status: "error", data: `could not check out`});
            }
        });
        
    });
}
    // socket.emit ()

    // update for later versions // save data 
    // socket.on('signout', (data) => {
    //     //delete instance
    //     //save temporariy
    //     socket.emit('message', {status: "success", data: ""});
 // });

const addProduct = async (req, res) => {
    const { contact, productID, productCode } = req.body;
    
    const product_data = await Products.getProduct(productID);
    
    try {
        const { user_bill, socket } = users_socket.get(contact);
        const data = await user_bill.addItem({ productCode, ...product_data[0] });
    } catch(err) {
        console.log(err);
    }

    // socket.emit('message', { status: "success", data: "data"});
};

// get all transaction numbers

// get all products of the transaction numbers

module.exports = { socket, addProduct }
