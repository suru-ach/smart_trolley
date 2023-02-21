const connection = require('../config/db.init');
const { deleteDB } = require('../queries/queries');

(() => {
    connection.query(deleteDB, function(err, result) {
        if(err) throw err;
        console.log('dropped');
    });
})()