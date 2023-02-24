const pool = require('../config/db');
const { createProductsTable } = require('../queries/queries');

(async() => {
    await pool.execute(createProductsTable);
    console.log('created');
})()