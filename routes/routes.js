var express = require('express');
const router = express.Router();
var peopleController = require('../controllers/peopleController');


router.get('/people', function (req, res, next) {
    peopleController.getPeople(function (err, data) {
        if (err) throw err; // Check for the error and throw if it exists.
        res.status(200).send(data);
    });
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Welcome Node.js Rest Api Example'});
});



module.exports = router;