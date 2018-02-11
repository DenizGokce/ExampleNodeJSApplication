const mongoose = require('mongoose');
// Person Schema
const personSchema = mongoose.Schema({
    id: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
}, {
    collection: "people",
    versionKey: false
});

const Person = module.exports = mongoose.model("person", personSchema);