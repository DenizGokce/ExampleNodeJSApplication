var peopleRepository = require('../datasource/peopleRepository');

module.exports.getPeople = function (callback) {
    peopleRepository.getPeople(function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        return callback(null, data);
    });
};

module.exports.getPerson = function (id, callback) {
    peopleRepository.getPerson(id, function (err, data) {
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

module.exports.removePerson = function (id, callback) {
    peopleRepository.removePerson(id, function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        return callback(null, data);
    });
};

module.exports.updatePerson = function (id, person, callback) {
    peopleRepository.updatePerson(id, person, function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        return callback(null, data);
    });
};

