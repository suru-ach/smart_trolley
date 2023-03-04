const pool = require('../config/db');
const { createBillsTable } = require('../queries/queries');

(async() => {
    await pool.execute(createBillsTable);
    console.log('created');
})()