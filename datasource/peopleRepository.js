let dbContext = require('../datasource/context');
const sql = require('mssql');

module.exports.getPeople = function (callback) {
    new sql.Request(dbContext).query('select * from person', (err, result) => {
        if (err) throw err; // Check for the error and throw if it exists.
        return callback(null, result.recordset);
    });
};

module.exports.getPerson = function (id, callback) {
    new sql.Request(dbContext)
        .input('id', sql.Int, id)
        .query('select * from person where id = @id', (err, result) => {
            if (err) throw err; // Check for the error and throw if it exists.
            return callback(null, result.recordset[0]);
        });
};

module.exports.addPerson = function (person, callback) {
    new sql.Request(dbContext)
        .input('firstname', sql.NVarChar, person.firstname)
        .input('lastname', sql.NVarChar, person.lastname)
        .query('insert into person(firstname, lastname) values(@firstname, @lastname); SELECT SCOPE_IDENTITY() AS id;', (err, result) => {
            if (err) throw err; // Check for the error and throw if it exists.
            person.id = result.recordset[0].id;
            return callback(null, person);
        });
};

module.exports.removePerson = function (id, callback) {
    new sql.Request(dbContext)
        .input('id', sql.Int, id)
        .query('delete from person where id = @id', (err, result) => {
            if (err) throw err; // Check for the error and throw if it exists.
            return callback(null, (result.rowsAffected[0] > 0));
        });
};


module.exports.updatePerson = function (id, person, callback) {
    new sql.Request(dbContext)
        .input('id', sql.Int, id)
        .input('firstname', sql.NVarChar, person.firstname)
        .input('lastname', sql.NVarChar, person.lastname)
        .query('update person set firstname = @firstname, lastname = @lastname where id = @id', (err, result) => {
            if (err) throw err; // Check for the error and throw if it exists.
            return callback(null, result.rowsAffected[0] > 0);
        });
};
