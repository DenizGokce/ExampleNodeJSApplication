const mongoose = require('mongoose');
// Person Schema
const personSchema = mongoose.Schema({
    id: {
        type: Number
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
});

const Person = module.exports = mongoose.model("person", personSchema);