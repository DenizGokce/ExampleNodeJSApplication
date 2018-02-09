var mongodbUri = require('mongodb-uri');

var localDB = mongodbUri.format(
    {
        username: '',
        password: '',
        hosts: [
            {
                host: 'localhost',
                port: 27017
            }
        ],
        database: 'default',
        options: {}
    }
);
var stagingDB = mongodbUri.format(
    {
        username: 'denizgokce',
        password: 'testpassword',
        hosts: [
            {
                host: 'cluster0-shard-00-00-ias3l.mongodb.net',
                port: 27017
            },
            {
                host: 'cluster0-shard-00-01-ias3l.mongodb.net',
                port: 27017
            },
            {
                host: 'cluster0-shard-00-02-ias3l.mongodb.net',
                port: 27017
            }
        ],
        database: 'default',
        options: {
            ssl: true,
            replicaSet: "Cluster0-shard-0",
            authSource: "admin"
        }
    }
);
console.log(stagingDB);
const mongodb = module.exports = stagingDB;