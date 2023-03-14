const { database } = require('../../utils/secret.utils');

const createDB = `CREATE DATABASE IF NOT EXISTS ${database}`;

const deleteDB = `DROP DATABASE IF EXISTS ${database}`;

const createUserTable = 
`CREATE TABLE customers (
    Contact_Number VARCHAR(50) NOT NULL,
    Customer_Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT,
    Role  VARCHAR(50) NOT NULL
);`;

const createProductsTable = 
`CREATE TABLE all_products (
    Product_ID INT NOT NULL,
    Product_Name VARCHAR(100) NOT NULL,
    Cost FLOAT NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT
);`

const createBillsTable = 
`CREATE TABLE all_bills (
    Transaction_No INT NOT NULL,
    Contact_Number VARCHAR(100) NOT NULL,
    Bill_Date DATE NOT NULL,
    Product_ID INT NOT NULL,
    Product_Name VARCHAR(100) NOT NULL,
    Cost FLOAT NOT NULL,
    Quantity INT NOT NULL DEFAULT 1
);`

module.exports = {
    createDB,
    deleteDB,
    createUserTable,
    createProductsTable,
    createBillsTable
};