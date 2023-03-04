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
            const { user_bill } = users_socket.get(data.contact);
            // delete item //
            socket.emit('message', { status: "success", data: `deleted`});
        });
        
        socket.on('bill', async (data) => {
            const { user_bill } = users_socket.get(data.contact);
            const res = await user_bill.checkoutBill();
            if(res) {
                socket.emit('message', { status: "success", data: `checked out`});
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
    const { contact, productID } = req.body;
    const product_data = await Products.getProduct(productID);
    
    try {
        const { user_bill, socket } = users_socket.get(contact);
        const data = await user_bill.addItem(product_data[0]);
    } catch(err) {
        console.log(err);
    }

    
    // socket.emit('message', { status: "success", data: "data"});

};

module.exports = { socket, addProduct }
