const Pool = require('pg').Pool;
let dbConfig = require('../configuration/dbConfig');
const pool = new Pool(dbConfig);

pool.connect();

let pgContext = pool;

// CONNECTION EVENTS
// When successfully connected
pgContext.on('connected', client => {
    console.log('Postgres default connection open to ' + client.connectionString);
});

// If the connection throws an error
pgContext.on('error', (error, client) => {
    console.log('Postgres default connection error: ' + error);
});

// When the connection is disconnected
pgContext.on('remove', (client) => {
    console.log('Postgres default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
// process.on('SIGINT', function () {
//     pgContext.terminate();
//     console.log('Postgres default connection disconnected through app termination');
//     process.exit(0);
// });

const dbContext = module.exports = pgContext;

