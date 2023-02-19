const mysql = require('mysql');
require('dotenv').config();

    var pool = mysql.createPool({
        host: process.env.dbHost,
        user: process.env.dbUser,
        password: process.env.dbPassword,
        database: process.env.dbName
    });


module.exports = pool;
