const pool = require('../database/config/db');

const filterTransaction = (arr) => {
    return arr.map(({Transaction_No,
        Bill_Date,
        Product_ID,
        Product_Name,
        Cost,
        Quantity}) => {
        return { Transaction_No, Bill_Date, Product_ID, Product_Name, Cost, Quantity, Total: (Cost*Quantity) }
    });
}
const sql_generate = (transaction_id, contact, items) => {
    const prefix = `INSERT INTO all_bills (
        Transaction_No,
        Contact_Number,
        Bill_Date,
        Product_ID,
        Product_Name,
        Cost,
        Quantity)
        VALUES`;
    const sql_insert = items
        .map(({ Product_Name, Cost, Product_ID, Quantity }) => {
            return `(${transaction_id},'${contact}','${new Date().toISOString().slice(0,10)}',${Product_ID},'${Product_Name}',${Cost}, ${Quantity})`;
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
        const product_exists = this.items.find(item => item.productCode === product.productCode && item.Product_ID === product.Product_ID);
        if(product_exists) {
            this.item = this.items.filter(item => item.productCode !== product.productCode && item.Product_ID !== product.Product_ID);
        } else {
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
        const unique_products = new Map();
        this.items = this.items.filter((item) => {
            if(unique_products.has(item.Product_ID)) {
                unique_products.set(item.Product_ID, unique_products.get(item.Product_ID) + 1);
                return false;
            }
            item.Quantity = 1;
            unique_products.set(item.Product_ID, 1);
            return true;
        });
        this.items.forEach((item) => {
            item.Quantity = unique_products.get(item.Product_ID);
        });
        try {
            const sql = sql_generate(this.transaction_id, this.contact, this.items);
            await pool.execute(sql);
            return 1;
        } catch(err) {
            console.log(err);
            return 0;
        }
    }
    
    static async generateBills(contact) {
        const [data, _] = await pool.execute(`SELECT * FROM all_bills WHERE Contact_Number=${contact};`);
        let bill_of_all = [];
        const transaction_set = {};
        data.forEach((bill) => {
            if(!transaction_set[bill.Transaction_No]) {
                transaction_set[bill.Transaction_No] = [];
            }
            transaction_set[bill.Transaction_No].push(bill);
        });
        for(const key in transaction_set) {
            bill_of_all.push({
                transaction_id: key,
                data: [...filterTransaction(transaction_set[key])]
            });
        }
        return {
            hits: bill_of_all.size,
            bill_of_all
        };
    }

}

module.exports = Bill;