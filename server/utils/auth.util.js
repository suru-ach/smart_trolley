const jwt = require('jsonwebtoken');
const { jwt_key } = require('./secret.utils');

const auth_token = (req, res, next) => {
    const { user_access_token } = req.cookies;
    try {
        const isUser = jwt.verify(user_access_token, jwt_key);
        const { contact, username } = isUser;
        req.user = {
            contact,
            username
        }
        next();
    } catch (err) {
        return res.status(401).json({ status: "error", data: "invalid user", error: err });
    }
}

module.exports = auth_token;