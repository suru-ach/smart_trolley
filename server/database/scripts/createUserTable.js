const pool = require('../config/db');
const { createUserTable } = require('../queries/queries');

(async() => {
    await pool.execute(createUserTable);
    console.log('created');
})()