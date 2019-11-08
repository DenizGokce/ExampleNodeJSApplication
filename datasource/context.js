const sql = require('mssql');
mssqldb = require("../configuration/dbConfig");

const pool = new sql.ConnectionPool(mssqldb);

var mssqlContext = pool;

// CONNECTION EVENTS
// When successfully connected
pool.connect(err => {
    if (!err)
        console.log('Mssql default connection open to ' + mssqldb.server);
    else
        console.log(err);
});

// If the connection throws an error
pool.on('error', err => {
    console.log('Mssql default connection error: ' + err);
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    pool.close(err => {
        if (!err){
            console.log('Mssql default connection disconnected through app termination');
            process.exit(0);
        }
    });
});

const dbContext = module.exports = mssqlContext;

