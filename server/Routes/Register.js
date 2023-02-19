const express = require('express');
const router = express.Router();
const pool = require('../Routes/dbConnect');
const bcrypt = require('bcrypt');
const url = require('url');

router.get("/", (req, res) => {
    const q = url.parse(req.url, true).query;
    console.log(q);
    const saltRounds = 10;
    bcrypt.hash(q.password, saltRounds, function (err, hash) {
        if (err) {
            console.log("hash error: " + err);
        }
        else {
            const sql = `INSERT INTO customers(Name, Phone, Password) VALUES('Srivatsa', '${q.phone.toString()}', '${hash.toString()}')`;
            pool.getConnection((err, db) => {
                if (err) {
                    console.log(err);
                }
                else {
                    db.query(sql, (err, result, fields) => {
                        if (err) {
                            console.log(err);
                            res.status(203).send("Could not add user!");
                        }
                        else {
                            console.log("User Created");
                            res.status(205).send("User Created");
                        }
                    });
                }

                db.release();
            })
        }
    });
})

module.exports = router;