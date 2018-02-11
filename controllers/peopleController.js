var peopleRepository = require('../datasource/peopleRepository');

module.exports.getPeople = function (callback) {
    peopleRepository.getPeople(function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        return callback(null, data);
    });
};

module.exports.addPerson = function (person, callback) {
    peopleRepository.addPerson(person, function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        return callback(null, data);
    });
};

module.exports.removePerson = function (person, callback) {
    peopleRepository.removePerson(person, function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        return callback(null, data);
    });
};

module.exports.updatePerson = function (person, callback) {
    peopleRepository.updatePerson(person, function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        return callback(null, data);
    });
};

