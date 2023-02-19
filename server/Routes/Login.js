const express = require('express');
const router = express.Router();
const pool = require('../Routes/dbConnect');
const bcrypt = require('bcrypt');
const url = require('url');


router.get('/', (req, res) => {
    const q = url.parse(req.url, true).query;
    // console.log(q);
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
        }
        else {
            db.query(`SELECT Password FROM customers WHERE Phone = '${q.phone}'`, (err, results, fields) => {
                if (err) {
                    console.log(err);
                }
                else {
                    if (results.length > 0) {
                        s = results[0].Password
                        bcrypt.compare(q.password, s, function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                if (result) {
                                    res.status(205).send("Logged IN")
                                    db.release();
                                    console.log("Login Successful");

                                }
                                else {
                                    res.status(203).send("Falied")
                                    console.log("Login Failed");
                                }
                            }
                        });
                    }
                    else{
                        res.status(204).send("User not found! Please Register")
                    }
                }
            })

        }

    })

})

module.exports = router;