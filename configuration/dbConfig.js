/*
IMPORTANT NOTE: In order to connect local mssql server sql server network protocols tcp ip port must be set to 1433
and SQL Server Browser service must be started and after all this sql server must be restarted
 */
var localDB = {
    user: 'test',
    password: '1234',
    server: '127.0.0.1', // You can use 'localhost\\instance' to connect to named instance
    database: 'test',
    port: 1433,
    options: {
        encrypt: false, // Use this if you're on Windows Azure
        trustedConnection: true
    }
};
var stagingDB = {
    user: '...',
    password: '...',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: '...',
};
//console.log(stagingDB);
const dbConfig = module.exports = localDB;
