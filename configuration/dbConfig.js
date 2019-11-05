let localDB =
    {
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '1234',
        port: 5432,
    };
let stagingDB =
    {
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '1234',
        port: 5432,
    };

const dbConfig = module.exports = localDB;
