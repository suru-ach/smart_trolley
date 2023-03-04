const pool = require('../database/config/db');

const sql_generate = (transaction_id, contact, items) => {
    const prefix = `INSERT INTO all_bills (
        Transaction_No,
        Contact_Number,
        Bill_Date,
        Product_Name,
        Cost)
        VALUES`;
    const sql_insert = items
        .map(({ Product_Name, Cost }) => {
            return `(${transaction_id},'${contact}','${new Date().toISOString().slice(0,10)}','${Product_Name}',${Cost})`;
        })
        .join(',')+';';
    return prefix+sql_insert;
}

class Bill {
    constructor(contact) {
        this.contact = contact;
        this.transaction_id = null;
        this.items = [];
    }

    async init() {
        this.transaction_id = await this.getIdNo();
    }

    async addItem(product) {
        // deletes if scanned twice
        const product_exists = this.items.find(item => item.productCode === product.productCode && item.productID === product.productID);
        if(!product_exists) {
            this.items.push(product);
        }
        return this.items;
    }

    async getIdNo() {
        try {   
            const [transaction_value, _] = await pool.execute(`SELECT MAX(Transaction_No) FROM all_bills WHERE Contact_Number=${this.contact};`);
            const [_key, transaction_id] = Object.entries(transaction_value[0])[0];
            return transaction_id === null ? 1 : transaction_id+1;
        } catch(err) {
            console.log(err);
        }
        return null;
    }

    async checkoutBill() {
        try {
            const sql = sql_generate(this.transaction_id, this.contact, this.items);
            await pool.execute(sql);
            return 1;
        } catch(err) {
            console.log(err);
            return 0;
        }
    }
    
    async getBill(transaction_number) {
        // get bill
        const [data, _] = await pool.execute(`SELECT * FROM all_bills WHERE Contact_Number=${this.contact} AND Transaction_No=${transaction_number};`);
        return data;
    }

}

module.exports = Bill;