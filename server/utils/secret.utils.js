require('dotenv').config()

const secrets = {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    jwt_key: process.env.JWT_KEY,
    jwt_expire: process.env.JWT_EXPIRE
};

module.exports = {
    ...secrets
};