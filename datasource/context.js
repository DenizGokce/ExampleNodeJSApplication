const sql = require('mssql');
mssqldb = require("../configuration/dbConfig");

const pool = new sql.ConnectionPool(mssqldb);

var mssqlContext = pool;

pool.connect(err => {
    console.log(err);
});

pool.on('error', err => {
    console.log(err);
});



// CONNECTION EVENTS
// When successfully connected
// sql.connect(mssqldb).then(pool => {
//     console.log('Mssql default connection open to ' + mssqldb);
// }).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });
//
// // If the connection throws an error
// sql.on('error', err => {
//     console.log('Mssql default connection error: ' + err);
// });

/*// When the connection is disconnected
mongoContext.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoContext.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});*/

const dbContext = module.exports = mssqlContext;

