const jwt = require('jsonwebtoken');
const User = require("../models/user.model");

const { jwt_key, jwt_expire } = require('../utils/secret.utils');

const signIn = async(req, res) => {
    const { username, contact, password, email } = req.body;
    if(!username || !contact || !password || !email) {
        return res.status(401).json({status: "error", data: "invalid credentials"});
    }
    const user = new User(username, contact, password, email);
    const final_user = await user.getUser();
    if(!final_user) {
        return res.status(401).json({status: "error", data: "user not found"});
    }

    const token = jwt.sign({username, email, contact}, 'secret key', { expiresIn: '1day' });
    
    return res
        .status(200)
        .cookie("user_access_token", token, { httpOnly: true })
        .json({status: "success", data: "logged in successful"});
}

const signUp = async(req, res) => {
    const { username, contact, password, email } = req.body;
    if(!username || !contact || !password || !email) {
        return res.status(401).json({status: "error", data: "invalid credentials"});
    }
    const user = new User(username, contact, password, email);
    await user.create();
    
    const token = jwt.sign({username, email, contact}, jwt_expire, { expiresIn: jwt_expire });

    return res
        .status(201)
        .cookie("user_access_token", token, { httpOnly: true })
        .json({status: "success", data: "data"});
}

const signOut = async(req, res) => {
    return res.status(200).clearCookie("user_access_token").json({status: "success", data: "data"});
}

module.exports = {
    signIn,
    signUp,
    signOut
}