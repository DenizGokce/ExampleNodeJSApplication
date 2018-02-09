Person = require('../models/person');
const repo = require("mongoose-repository-pattern");
mongodb = require("../configuration/dbConfig")
var peopleRepo = repo(Person, mongodb);

module.exports.getPeople = function (callback) {
    peopleRepo.find().then(function (people) {
        return callback(null, people);
    }).catch(function (err) {
        console.log(err.message);
    });
};

