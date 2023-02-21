const { database } = require('../../utils/secret.utils');

const createDB = `CREATE DATABASE IF NOT EXISTS ${database}`;

const deleteDB = `DROP DATABASE IF EXISTS ${database}`;

const createUserTable = 
`CREATE TABLE customers (
    Contact_Number INT NOT NULL,
    Customer_Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT
);`;

module.exports = {
    createDB,
    deleteDB,
    createUserTable
};