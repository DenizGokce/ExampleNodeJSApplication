const mongoose = require('mongoose');
const repo = require("mongoose-repository-pattern");
mongodb = require("../configuration/dbConfig")

// Counter Schema
const counterSchema = mongoose.Schema({
    _id: {
        type: String
    },
    sequence_value: {
        type: Number
    }
}, {
    collection: "counter",
    versionKey: false
});

const Counter = module.exports = mongoose.model("counter", counterSchema);

var counterRepo = repo(Counter, mongodb);

module.exports.getIdForNextPerson = function (callback) {
    counterRepo.findByID("person_id").then(function (person_counter) {
        person_counter.sequence_value = person_counter.sequence_value + 1;
        counterRepo.update(person_counter).then(function (person_counter) {
            return callback(null, person_counter.sequence_value);
        });
    }).catch(function (err) {
        console.log(err.message);
    });
};