const pool = require('../database/config/db');
const hash = require('../utils/password.utils');
const { admin_key } = require('../utils/secret.utils');

class User {
    constructor(username, contact, password, email, adminKey) {
        this.username = username;
        this.password = password;
        this.contact = parseInt(contact);
        this.email = email;
        this.admin_key = adminKey;
    }
    
    async create() {
        const isAdmin = (admin_key === this.admin_key) ? 'admin' : 'user';
        this.password = await hash(this.password);
        const data = await pool.execute(`
        INSERT INTO customers (Contact_Number,Customer_Name, Email,Password,Role,Sl_No)
        VALUES 
        ('${this.contact}', '${this.username}', '${this.email}', '${this.password}','${isAdmin}', null);
        `);
        return isAdmin;
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