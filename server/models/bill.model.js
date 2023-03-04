const pool = require('../database/config/db')

class Bill {
    constructor(barcode, cartID, BillNo) {
        this.barcode = barcode;
        this.BillNo = BillNo;
        this.cartID = cartID;
    }
    async getPhone(){
        try {
            const phoneQuery = await pool.execute(`SELECT Phone FROM cart_map WHERE Cart_No = '${this.cartID}'`);
            this.Phone = phoneQuery[0][0].Phone;
        } catch (error) {
            console.log(error);
        }
    }

    async getProduct() {
        const result = await pool.execute(`SELECT Product_Name,Cost FROM all_products WHERE Product_ID = '${this.barcode}'`)
        return (result[0])
    }

    async addToBill() {
        const product = await this.getProduct();
        await this.getPhone();
        if (product) {
            const { Product_Name, Cost } = product[0];
            const result = await pool.execute(`INSERT INTO all_bills ( Bill_No, Phone, Product_ID, Product_Name, Cost, Quantity) VALUES('${this.BillNo}','${this.Phone}','${this.barcode}','${Product_Name}', '${Cost}', '${1}')`)
            return (result)
        }
    }

    async getAll() {
        const result = await pool.execute(`SELECT * FROM all_bills WHERE Phone = '${this.phone}'`)
        return (result[0])
    }
}

module.exports = Bill;