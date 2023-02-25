const { database } = require('../../utils/secret.utils');

const createDB = `CREATE DATABASE IF NOT EXISTS ${database}`;

const deleteDB = `DROP DATABASE IF EXISTS ${database}`;

const createUserTable = 
`CREATE TABLE customers (
    Phone VARCHAR(50) NOT NULL,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT
);`;

const createProductsTable = 
`CREATE TABLE all_products (
    Product_ID INT NOT NULL,
    Product_Name VARCHAR(100) NOT NULL,
    Cost FLOAT NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT
);`

module.exports = {
    createDB,
    deleteDB,
    createUserTable,
    createProductsTable
};