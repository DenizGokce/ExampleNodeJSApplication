let dbContext = require('../datasource/context');
const sql = require('mssql');

module.exports.getPeople = function (callback) {
    new sql.Request(dbContext).query('select * from person', (err, result) => {
        if (err) throw err; // Check for the error and throw if it exists.
        return callback(null, result.recordset);
    });
};

/*
module.exports.getPerson = function (id, callback) {
    peopleRepo.find({id: id}, "-_id id firstname lastname").then(function (people) {
        return callback(null, people[0]);
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
*/
