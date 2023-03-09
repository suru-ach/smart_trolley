const pool = require('../database/config/db');

class Products {
    constructor(id) {
        this.id = id;
    }

    static async addMultipleProducts(arr) {
        const allProducts = await this.getAllProducts();
        var newProducts;
        console.log(allProducts.length);
        if (allProducts.length != 0) {
            newProducts = arr.filter(item =>
                !allProducts.some(product => product.Product_ID === item.Product_ID)
            );
        }
        else {
            newProducts = arr;
        }
        console.log(newProducts);
        newProducts.forEach(async ({ Product_ID, Product_Name, Cost }) => {
            await pool.execute(
                `INSERT INTO all_products (Product_ID, Product_Name, Cost)
                    VALUES
                    (?,?,?)`,
                [Product_ID, Product_Name, Cost]
            );
        });
    }

    static async addSingleProduct(product) {
        try {
            pool.execute(`INSERT INTO all_products(Product_ID, Product_Name, Cost) VALUES(?,?,?)`, [product.Product_ID, product.Product_Name, product.Cost])
        } catch (error) {
            console.log(console.error());
        }
    }

    static async getProduct(id) {
        const [data, _] = await pool.execute(`SELECT * FROM all_products WHERE Product_ID=${id}`);
        return data;
    }

    static async getAllProducts() {
        const [data, _] = await pool.execute('SELECT * FROM all_products');
        return data;
    }

    static async deleteProducts() {
        await pool.execute(`DELETE FROM all_products`);
    }
}

module.exports = Products;