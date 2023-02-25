const pool = require('../database/config/db')

class Bill {
    constructor(barcode, phone) {
        this.barcode = barcode;
        this.phone = phone;
    }

    async getProduct() {
        const result = await pool.execute(`SELECT Product_Name,Cost FROM all_products WHERE Product_ID = '${this.barcode}'`)
        // console.log(result[0]);
        return (result[0])
    }

    async addToBill() {
        const product = await this.getProduct(this.barcode, this.phone);
        if (product) {
            const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let currentDate = (`${year}-${month}-${day}`).toString()
            const { Product_Name, Cost } = product[0];
            const result = await pool.execute(`INSERT INTO all_bills ( Bill_Date, Phone, Product_ID, Product_Name, Cost, Quantity, Amount) VALUES('${currentDate}','${this.phone}','${this.barcode}','${Product_Name}', '${Cost}', '${1}', '${Cost}')`)
            return (result)
        }
    }

    async getAll() {
        const result = await pool.execute(`SELECT * FROM all_bills WHERE Phone = '${this.phone}'`)
        return (result[0])
    }
}

module.exports = Bill;