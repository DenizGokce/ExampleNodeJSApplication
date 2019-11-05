// Person = require('../models/person');
let dbContext = require('../datasource/context');

module.exports.getPeople = function (callback) {
    dbContext.query('select * from person', (err, res) => {
        if (!err) {
            return callback(null, res.rows);
        } else {
            console.log(err.stack);
        }
    });
};


module.exports.getPerson = function (id, callback) {
    dbContext.query('select * from person where id=' + id, (err, res) => {
        if (!err) {
            return callback(null, res.rows[0]);
        } else {
            console.log(err.stack);
        }
    });
};

module.exports.addPerson = function (person, callback) {
    dbContext.query('insert into person(firstname, lastname) values($1, $2) RETURNING id', [person.firstname, person.lastname], (err, res) => {
        if (!err) {
            person.id = res.rows[0].id;
            return callback(null, person);
        } else {
            console.log(err.stack);
        }
    });
};

// module.exports.removePerson = function (person, callback) {
//     peopleRepo.find({id: person.id}).then(function (people) {
//         var existPerson = people[0];
//         peopleRepo.remove(existPerson._id).then(function (person) {
//             return callback(null, person);
//         }).catch(function (err) {
//             console.log(err.message);
//         });
//     }).catch(function (err) {
//         console.log(err.message);
//     });
// };
//
// module.exports.updatePerson = function (person, callback) {
//     peopleRepo.find({id: person.id}).then(function (people) {
//         var existPerson = people[0];
//         existPerson.firstname = person.firstname;
//         existPerson.lastname = person.lastname;
//         peopleRepo.update(existPerson).then(function (person) {
//             return callback(null, person);
//         }).catch(function (err) {
//             console.log(err.message);
//         });
//     }).catch(function (err) {
//         console.log(err.message);
//     });
// };

