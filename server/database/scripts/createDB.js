const connection = require('../config/db.init');
const { createDB } = require('../queries/queries');

(() => {
    connection.query(createDB, function(err, result) {
        if(err) throw err;
        console.log('created');
    })
})()