const jwt = require('jsonwebtoken');
const { jwt_key } = require('./secret.utils');

const auth_token_user = (req, res, next) => {
    const { user_access_token } = req.cookies;
    if(!user_access_token) {
        return res.status(401).json({ status: "error", data: "invalid user", error: err });
    }
    try {
        const isUser = jwt.verify(user_access_token, jwt_key);
        const { contact, username } = isUser;
        req.user = {
            contact,
            username,
        }
        next();
    } catch (err) {
        return res.status(401).json({ status: "error", data: "invalid user", error: err });
    }
}

const auth_token_admin = (req, res, next) => {
    const { user_access_token } = req.cookies;
    if(!user_access_token) {
        return res.status(401).json({ status: "error", data: "invalid user", error: err });
    }
    try {
        const isUser = jwt.verify(user_access_token, jwt_key);
        const { contact, username, isAdmin } = isUser;
        req.user = {
            contact,
            username,
            isAdmin
        }
        if(!isAdmin) {
            return res.status(401).json({ status: "error", data: "invalid user", error: err });
        }
        next();
    } catch (err) {
        return res.status(401).json({ status: "error", data: "invalid user", error: err });
    }
}



module.exports = { auth_token_admin, auth_token_user };