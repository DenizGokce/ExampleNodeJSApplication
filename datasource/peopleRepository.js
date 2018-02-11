Person = require('../models/person');
Counter = require('../models/counter')
const repo = require("mongoose-repository-pattern");
mongodb = require("../configuration/dbConfig")
var peopleRepo = repo(Person, mongodb);

module.exports.getPeople = function (callback) {
    peopleRepo.find({}, "-_id id firstname lastname").then(function (people) {
        return callback(null, people);
    }).catch(function (err) {
        console.log(err.message);
    });
};

module.exports.addPerson = function (person, callback) {
    Counter.getIdForNextPerson(function (err, id) {
        if (err) throw err; // Check for the error and throw if it exists.
        var newPerson = new Person();
        newPerson.firstname = person.firstname;
        newPerson.lastname = person.lastname;
        newPerson.id = id;
        peopleRepo.add(newPerson).then(function (person) {
            return callback(null, person);
        }).catch(function (err) {
            console.log(err.message);
        });
    });
};

module.exports.removePerson = function (person, callback) {
    peopleRepo.find({id: person.id}).then(function (people) {
        var existPerson = people[0];
        peopleRepo.remove(existPerson._id).then(function (person) {
            return callback(null, person);
        }).catch(function (err) {
            console.log(err.message);
        });
    }).catch(function (err) {
        console.log(err.message);
    });
};

module.exports.updatePerson = function (person, callback) {
    peopleRepo.find({id: person.id}).then(function (people) {
        var existPerson = people[0];
        existPerson.firstname = person.firstname;
        existPerson.lastname = person.lastname;
        peopleRepo.update(existPerson).then(function (person) {
            return callback(null, person);
        }).catch(function (err) {
            console.log(err.message);
        });
    }).catch(function (err) {
        console.log(err.message);
    });
};

