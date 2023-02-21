const mysql = require('mysql2');
const { host, user, password } = require('../../utils/secret.utils');

const connection = mysql.createConnection({ host, user, password });

module.exports = connection;