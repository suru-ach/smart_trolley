const pool = require('../database/config/db');

class Products {
    constructor(id) {
        this.id = id;
    }

    static async addMultipleProducts(arr) {
        arr.forEach(async ({ Product_ID, Product_Name, Cost }) => {
            await pool.execute(
                `INSERT INTO all_products (Product_ID, Product_Name, Cost)
                VALUES
                (${Product_ID},'${Product_Name}',${Cost});`
            );
        });
    }

    static async getProduct(id) {
        const [data, _] = await pool.execute(`SELECT * FROM all_products WHERE Product_ID=${id}`);
        return data;
    }

    static async getProducts() {
        const [data, _] = await pool.execute('SELECT * FROM all_products');
        return data;
    }

    static async deleteProducts() {
        await pool.execute(`DELETE FROM all_products`);
    }
}

module.exports = Products;