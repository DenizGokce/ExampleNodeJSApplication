var express = require('express');
const router = express.Router();
var peopleController = require('../controllers/peopleController');


router.get('/people', function (req, res, next) {
    peopleController.getPeople(function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        res.status(200).send(data);
    });
});

router.get('/people/:personId', function (req, res, next) {
    var personId = req.params.personId;
    peopleController.getPerson(personId, function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        res.status(200).send(data);
    });
});

router.post('/people', function (req, res, next) {
    var person = req.body;
    console.log(person);
    peopleController.addPerson(person, function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        res.status(200).send(data);
    });
});

router.delete('/people', function (req, res, next) {
    var person = req.body;
    peopleController.removePerson(person, function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        res.status(200).send(data);
    });
});

router.put('/people', function (req, res, next) {
    var person = req.body;
    peopleController.updatePerson(person, function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        res.status(200).send(data);
    });
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Welcome Node.js Rest Api Example'});
});


module.exports = router;