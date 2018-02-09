const mongoose = require('mongoose');
mongodb = require("../configuration/dbConfig")
// Connect to Mongoose
//var dbURI = 'mongodb://denizgokce:testpassword@cluster0-shard-00-00-ias3l.mongodb.net:27017,cluster0-shard-00-01-ias3l.mongodb.net:27017,cluster0-shard-00-02-ias3l.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
var dbURI = mongodb

mongoose.Promise = global.Promise;
mongoose.connect(dbURI);

var mongoContext = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected
mongoContext.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoContext.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoContext.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoContext.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

const dbContext = module.exports = mongoContext;

