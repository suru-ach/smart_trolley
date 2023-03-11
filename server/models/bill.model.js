const pool = require('../database/config/db');

const sql_generate = (transaction_id, contact, items) => {
    const prefix = `INSERT INTO all_bills (Bill_No,Phone,Product_ID,Product_Name,Cost,Quantity)VALUES`;
    const sql_insert = items
        .map(({ Product_Name, Cost, Product_ID, Quantity }) => {
            return `(${transaction_id},'${contact}',${Product_ID},'${Product_Name}',${Cost}, ${Quantity})`;
        })
        .join(',') + ';';
    console.log(prefix + sql_insert);
    return prefix + sql_insert;
}

class Bill {
    constructor(cartID) {
        this.cartID = cartID;
        this.transaction_id = null;
        this.items = [];
    }

    async init(contact) {
        this.contact = contact
        this.transaction_id = await this.getIdNo();
    }


    async addItem(product) {
        const product_exists = this.items.find(item => item.productCode === product.productCode && item.Product_ID === product.Product_ID);
        if (product_exists) {
            this.items = this.items.filter(item => !(item.Product_ID === product.Product_ID && item.productCode === product.productCode));
        } else {
            this.items.push(product);
        }
        return this.items;
    }

    async getIdNo() {
        try {
            const [transaction_value, _] = await pool.execute(`SELECT MAX(Bill_No) FROM all_bills WHERE Phone=${this.contact};`);
            const [_key, transaction_id] = Object.entries(transaction_value[0])[0];
            return transaction_id === null ? 1 : transaction_id + 1;
        } catch (err) {
            console.log(err);
        }
    }

    async checkoutBill() {
        const unique_products = new Map();
        this.items = this.items.filter((item) => {
            if (unique_products.has(item.Product_ID)) {
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
        } catch (err) {
            console.log(err);
            return 0;
        }
    }

    async getBill(transaction_number) {
        // get bill
        const [data, _] = await pool.execute(`SELECT * FROM all_bills WHERE Phone=${this.contact} AND Transaction_No=${transaction_number};`);
        return data;
    }

    static async getPreviousBills(contact) {
        const [data, _] = await pool.execute(`SELECT * FROM all_bills WHERE Phone=?`, [contact]);
        return data;
    }
}

module.exports = Bill;