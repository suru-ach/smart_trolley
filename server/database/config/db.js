const mysql = require('mysql2');
const { host, user, database, password } = require('../../utils/secret.utils');

const pool = mysql.createPool({ host, user, database, password }).promise();

module.exports = pool;