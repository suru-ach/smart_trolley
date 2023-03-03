const pool = require('../database/config/db');

class Products {

    constructor(barcode, product_name, cost) {
        this.barcode = barcode;
        this.product_name = product_name;
        this.cost = cost;
    }

    async addProduct(){
        await pool.execute(`INSERT INTO all_products(Product_ID, Product_Name, Cost) VALUES('${this.barcode}','${this.product_name}','${this.cost}',)`)
    } 
    static async addMultipleProducts(arr) {
        arr.forEach(async({ Product_ID, Product_Name, Cost}) => {
            await pool.execute(
                `INSERT INTO all_products (Product_ID, Product_Name, Cost, Sl_No)
                VALUES
                (${Product_ID},'${Product_Name}',${Cost},null);`
            );
        });
    }

    async getProducts() {
        const [data, _] = await pool.execute('SELECT * FROM all_products');
        return data;
    }
}

module.exports = Products;