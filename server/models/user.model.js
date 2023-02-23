const pool = require('../database/config/db');
const hash = require('../utils/password.utils');

class User {
    constructor(username, contact, password, email) {
        this.username = username;
        this.password = password;
        this.contact = parseInt(contact);
        this.email = email;
    }
    
    async create() {
        this.password = await hash(this.password);
        const data = await pool.execute(`
        INSERT INTO customers (Contact_Number,Customer_Name, Email,Password) 
        VALUES 
        ('${this.contact}', '${this.username}', '${this.email}', '${this.password}');
        `);
        return data;
    }

    async getUser() {
        const [data, _] = await pool.execute(`SELECT * FROM customers WHERE Contact_Number = '${this.contact}'`);
        return data[0];
    }

    static async getUsers() {
        return await pool.execute(`SELECT * FROM customers`);
    }
}

module.exports = User;