var peopleRepository = require('../datasource/peopleRepository');

module.exports.getPeople = function (callback) {
    peopleRepository.getPeople(function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        return callback(null, data);
    });
};
